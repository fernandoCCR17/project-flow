import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormErrorLabelComponent } from "@shared/ui/form-error-label/form-error-label.component";
import { LoginRequest } from '@features/auth/models/request/login-request';
import { AuthService } from '@features/auth/services/auth.service';
import { LoginResponse } from '@features/auth/models/response/login-response';
import { RequestEvent, RequestStatus, transition } from '@shared/machine/machineState';
import { MessageComponent } from "@shared/ui/message/message.component";
import { SpinnerComponent } from "@shared/ui/icons/spinner/spinner.component";
import { Router, RouterLink } from '@angular/router';
import { DialogReenviarCodigoComponent } from "@features/auth/components/dialog-reenviar-codigo/dialog-reenviar-codigo.component";
import { ButtonUtils } from '@shared/utils/button-utils';
import { EyeComponent } from "@shared/ui/icons/eye/eye.component";
import { EyeSlashComponent } from "@shared/ui/icons/eye-slash/eye-slash.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormErrorLabelComponent, MessageComponent, SpinnerComponent, RouterLink, DialogReenviarCodigoComponent, EyeComponent, EyeSlashComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _state = signal(RequestStatus.IDLE);
  private _showPassword = signal(false);
  private _router = inject(Router);


  isIdle = computed(() => this._state() === RequestStatus.IDLE);
  isLoading = computed(() => this._state() === RequestStatus.LOADING);
  isSuccess = computed(() => this._state() === RequestStatus.SUCCESS);
  isError = computed(() => this._state() === RequestStatus.ERROR);

  isDialogVisible = signal(false);

  protected readonly ButtonUtils = ButtonUtils;

  errorMessage = "";

  profileForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  submit(){
    if(!this.profileForm.valid) return;
    this._state.set(transition(this._state(), RequestEvent.SEND));

    const bodyRequest: LoginRequest = {
      email: this.profileForm.get('email')?.value!,
      password: this.profileForm.get('password')?.value!
    }

    this._authService.postAuthLogin(bodyRequest).subscribe({
      next: (response: LoginResponse) => {
        this._state.set(transition(this._state(), RequestEvent.RESOLVE));

        this.profileForm.reset();

        sessionStorage.setItem("jwt", response.accessToken);
        this._router.navigate(['/workspace/dashboard']); 
      },
      error: (error) => {
        this.errorMessage = error?.error?.message ?? "Ocurrió un error al verificar al usuario, favor de contactar al area de sistemas";
        this._state.set(transition(this._state(), RequestEvent.REJECT));
      }
    });
  }

  handleStateDialogVisible(){
    this.isDialogVisible.set(!this.isDialogVisible());

    return this.isDialogVisible();
  }

  getShowPassword(){
    return this._showPassword();
  }

  changeTypePassword(){
    this._showPassword.set(!this._showPassword());

  }
}
