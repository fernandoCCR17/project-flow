import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormErrorLabelComponent } from "@shared/ui/form-error-label/form-error-label.component";
import { LoginRequest } from '@features/auth/models/login-request';
import { AuthService } from '@features/auth/services/auth.service';
import { LoginResponse } from '@features/auth/models/login-response';
import { RequestEvent, RequestStatus, transition } from '@shared/machine/machineState';
import { MessageComponent } from "@shared/ui/button/message/message.component";
import { SpinnerComponent } from "@shared/ui/icons/spinner/spinner.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormErrorLabelComponent, MessageComponent, SpinnerComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _state = signal(RequestStatus.IDLE);

  isIdle = computed(() => this._state() === RequestStatus.IDLE);
  isLoading = computed(() => this._state() === RequestStatus.LOADING);
  isSuccess = computed(() => this._state() === RequestStatus.SUCCESS);
  isError = computed(() => this._state() === RequestStatus.ERROR);

  errorMessage = "";

  profileForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]],
  });

  disabledButton(){
    const disabledClasses = "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";
    return (this.profileForm.valid || this.isLoading()) ? "" : disabledClasses;
  }

  submit(){
    if(!this.profileForm.valid) return;
    this._state.set(transition(this._state(), RequestEvent.SEND));

    const bodyRequest: LoginRequest = {
      email: this.profileForm.get('email')?.value!,
      password: this.profileForm.get('password')?.value!
    }

    this._authService.postAuthLogin(bodyRequest).subscribe({
      next: (response: LoginResponse) => {
        console.log(response)
        this._state.set(transition(this._state(), RequestEvent.RESOLVE));
      },
      error: (error) => {
        this.errorMessage = error?.error?.message ?? "Ocurrió un error al verificar al usuario, favor de contactar al area de sistemas";
        this._state.set(transition(this._state(), RequestEvent.REJECT));
      }
    });
  }
}
