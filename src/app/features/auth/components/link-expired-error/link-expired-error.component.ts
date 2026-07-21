import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { CardComponent } from "@shared/ui/card/card/card.component";
import { CardHeaderDirective } from "@shared/directives/card/card-header.directive";
import { CardBodyDirective } from "@shared/directives/card/card-body.directive";
import { RouterLink } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { PurposeTokenName } from '@shared/enums/PurposeTokenName';
import { RequestEvent, RequestStatus, transition } from '@shared/machine/machineState';
import { ToastService } from '@shared/ui/toast/toast.service';
import { ClockComponent } from "@shared/ui/icons/clock/clock.component";

@Component({
  selector: 'link-expired-error',
  imports: [CardComponent, CardHeaderDirective, CardBodyDirective, RouterLink, ClockComponent],
  templateUrl: './link-expired-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkExpiredErrorComponent {
	private _authService = inject(AuthService);
	private _state = signal(RequestStatus.IDLE);
	private _toastService = inject(ToastService);
	actionToken = input.required<string>();

	isLoading = computed(() => this._state() === RequestStatus.LOADING);
	isSuccess = computed(() => this._state() === RequestStatus.SUCCESS);
	isError = computed(() => this._state() === RequestStatus.ERROR);


	handleBtnResend(){
		this._state.set(transition(this._state(), RequestEvent.SEND));
		this._toastService.show({
			severity: 'info',
			title: 'Reenviando Email',
			message: 'El email esta siendo procesado'
		});
		
		this._authService.getVerificationEmailResend(PurposeTokenName.EMAIL_VERIFICATION, this.actionToken()).subscribe({
			next: () => {
				this._state.set(transition(this._state(), RequestEvent.RESOLVE));
				this._toastService.show({
					severity: 'success',
					title: 'Email Reenviado',
					message: 'El email fue reenviado con éxito'
				});
			},
			error: (error) => {
				this._state.set(transition(this._state(), RequestEvent.REJECT));
				this._toastService.show({
					severity: 'error',
					title: 'Ocurrio un error',
					message: error?.error?.message ?? "Ocurrió un error al reenviar el email"
 				});
			}
		});
	}
}
