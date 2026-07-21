import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ErrorVerifyEmailComponent } from "@features/auth/components/general-error-verify-email/general-error-verify-email.component";
import { AlreadyVerifyErrorEmailComponent } from "@features/auth/components/already-verify-error-email/already-verify-error-email.component";
import { LinkExpiredErrorComponent } from "@features/auth/components/link-expired-error/link-expired-error.component";
import { SucceedEmailVerifyComponent } from "@features/auth/components/succeed-email-verify/succeed-email-verify.component";
import { AuthService } from '@features/auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { PurposeTokenName } from '@shared/enums/PurposeTokenName';
import { RequestEvent, RequestStatus, transition } from '@shared/machine/machineState';
import { CircleComponent } from "@shared/loaders/circle/circle.component";

@Component({
  selector: 'app-verify-email',
  imports: [ErrorVerifyEmailComponent, AlreadyVerifyErrorEmailComponent, LinkExpiredErrorComponent, SucceedEmailVerifyComponent, CircleComponent],
  templateUrl: './verify-email.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmailComponent implements OnInit{
	private _authService = inject(AuthService);
	private readonly route = inject(ActivatedRoute);
	private _statusCode = "";
	private _state = signal(RequestStatus.LOADING);
	message = "";

	token = this.route.snapshot.paramMap.get('actionToken');
	isLoading = computed(() => this._state() === RequestStatus.LOADING);
	isSuccess = computed(() => this._state() === RequestStatus.SUCCESS);
	isError = computed(() => this._state() === RequestStatus.ERROR);

	getStatusCode(){
		return this._statusCode;
	}
	
	ngOnInit(): void {
		this._authService.getVerificationActionToken(this.token ?? "").subscribe({
			next: () => {
				this._statusCode = "200";

				this._state.set(transition(this._state(), RequestEvent.RESOLVE));
			},
			error: (error) => {
				this._statusCode = `${error.status}`;
				this.message = error.error.message ?? "Ocurrió un error.";
				this._state.set(transition(this._state(), RequestEvent.REJECT));
			}
		});
	}
}
