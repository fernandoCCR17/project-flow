import { ChangeDetectionStrategy, Component, computed, inject, model, signal } from '@angular/core';
import { DialogComponent } from "@shared/ui/dialog/dialog.component";
import { DialogBodyDirective } from "@shared/directives/dialog/dialog-body.directive";
import { DialogHeaderDirective } from "@shared/directives/dialog/dialog-header.directive";
import { FormBuilder, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from "@shared/ui/input/input.component";
import { FormatUtils } from '@shared/utils/format-utils';
import { ButtonUtils } from '@shared/utils/button-utils';
import { AuthService } from '@features/auth/services/auth.service';
import { RequestEvent, RequestStatus, transition } from '@shared/machine/machineState';
import { VerificationEmailResendRequest } from '@features/auth/models/request/verification-email-resend-request';
import { PurposeTokenName } from '@shared/enums/PurposeTokenName';

@Component({
  selector: 'dialog-reenviar-codigo',
  imports: [DialogComponent, DialogBodyDirective, DialogHeaderDirective, InputComponent, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './dialog-reenviar-codigo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogReenviarCodigoComponent {
  visible = model(false)
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _state = signal(RequestStatus.IDLE);

  isIdle = computed(() => this._state() === RequestStatus.IDLE);
  isLoading = computed(() => this._state() === RequestStatus.LOADING);
  isSuccess = computed(() => this._state() === RequestStatus.SUCCESS);
  isError = computed(() => this._state() === RequestStatus.ERROR);
  errorMessage = "";


  protected readonly FormatUtils = FormatUtils;
  protected readonly ButtonUtils = ButtonUtils;

  formReenviar = this._formBuilder.group({
    email: ['', [Validators.email, Validators.required]]
  })

  submit(){
    if(!this.formReenviar.valid) return;
    this._state.set(transition(this._state(), RequestEvent.SEND));
    
    const body: VerificationEmailResendRequest = {
      email: this.formReenviar.get("email")?.value ?? ""
    }

    this._authService.postVerificationEmailResend(PurposeTokenName.EMAIL_VERIFICATION, body).subscribe(
      {
        next: () => {
          this._state.set(transition(this._state(), RequestEvent.RESOLVE));
          this.formReenviar.reset();
        },
        error: (error) => {
          this.errorMessage = error?.error?.message ?? "Ocurrió un error al reenviar el código, favor de contactar al area de sistemas";
          this._state.set(transition(this._state(), RequestEvent.REJECT));
        },
        complete: () => {
          setTimeout(() => {
            this._state.set(transition(this._state(), RequestEvent.RESET));
          }, 3000);
        },
      }
    )
  }
}
