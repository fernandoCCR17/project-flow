import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordRegex } from '@shared/utils';
import { SpinnerComponent } from "@shared/ui/icons/spinner/spinner.component";
import { RequestEvent, RequestStatus, transition } from '@shared/machine/machineState';
import { InputComponent } from "@shared/ui/input/input.component";
import { PasswordStrengthMeterComponent } from "@shared/ui/password-strength-meter/password-strength-meter.component";
import { AuthService } from '@features/auth/services/auth.service';
import { SignupTenantRequest } from '@features/auth/models/request/signup-tenant-request';
import { SignupUserRequest } from '@features/auth/models/request/signup-user-request';
import { MessageComponent } from "@shared/ui/message/message.component";
import { FormatUtils } from '@shared/utils/format-utils';
import { DialogComponent } from "@shared/ui/dialog/dialog.component";
import { DialogBodyDirective } from "@shared/directives/dialog/dialog-body.directive";
import { RouterLink } from '@angular/router';
import { ButtonUtils } from '@shared/utils/button-utils';
import { SignupRequest } from '@features/auth/models/request/signup-request';

@Component({
  selector: 'app-sign-up',
  imports: [SpinnerComponent, ReactiveFormsModule, InputComponent, PasswordStrengthMeterComponent, MessageComponent, DialogComponent, DialogBodyDirective, RouterLink],
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  private _fb = inject(FormBuilder);
  private _state = signal(RequestStatus.IDLE);
  private _authService = inject(AuthService);

  protected readonly FormatUtils = FormatUtils;
  protected readonly ButtonUtils = ButtonUtils;

  isIdle = computed(() => this._state() === RequestStatus.IDLE);
  isLoading = computed(() => this._state() === RequestStatus.LOADING);
  isSuccess = computed(() => this._state() === RequestStatus.SUCCESS);
  isError = computed(() => this._state() === RequestStatus.ERROR);
  errorMessage = "";

  fieldActive = signal<string | null>(null);
  email = "";
  visible = false;

  registerForm = this._fb.group({
    company: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z ]+$/)]],
    maternalLastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z ]+$/)]],
    paternalLastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z ]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(passwordRegex)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern(passwordRegex)]]
  }, {
    validators: [this.passwordMatchValidator()]
  })

  passwordMatchValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const password = form.get('password')?.value;
      const confirmPassword = form.get('confirmPassword')?.value;

      return password === confirmPassword
        ? null
        : { passwordMismatch: true };
    };
  }

  submit(){
    this.visible = false;
    if(!this.registerForm.valid) return;

    this._state.set(transition(this._state(), RequestEvent.SEND));
    const tenant: SignupTenantRequest = {
      name: this.registerForm?.get("company")?.value?.toUpperCase() ?? ""
    }

    const user: SignupUserRequest = {
      email: this.registerForm?.get("email")?.value?.toLowerCase() ?? "",
      firstName: this.registerForm?.get("firstName")?.value?.toLowerCase() ?? "",
      maternalLastName: this.registerForm?.get("maternalLastName")?.value?.toLowerCase() ?? "",
      paternalLastName: this.registerForm?.get("paternalLastName")?.value?.toLowerCase() ?? "",
      password: this.registerForm?.get("password")?.value ?? "",
    }

    const objSignup: SignupRequest = {
      user,
      tenant
    }

    this._authService.postAuthSignup(objSignup).subscribe({
      next: () => {
        this.email = this.registerForm.get("email")?.value || "correo@correo.com";
        this.visible = true;
        this._state.set(transition(this._state(), RequestEvent.RESOLVE));
        this.registerForm.reset();
      },
      error: (error) => {
        this.errorMessage = error?.error?.message ?? "Ocurrió un error al verificar al usuario, favor de contactar al area de sistemas";
        this._state.set(transition(this._state(), RequestEvent.REJECT));
      }
    });
  }
}
