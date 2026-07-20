import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "@shared/ui/card/card/card.component";
import { CardBodyDirective } from "@shared/directives/card/card-body.directive";
import { CardHeaderDirective } from "@shared/directives/card/card-header.directive";
import { InformationCircleComponent } from "@shared/ui/icons/information-circle/information-circle.component";
import { RouterLink } from "@angular/router";

@Component({
	selector: 'general-error-verify-email',
	imports: [CardComponent, CardBodyDirective, CardHeaderDirective, InformationCircleComponent, RouterLink],
	templateUrl: './general-error-verify-email.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorVerifyEmailComponent {
	reload() {
		window.location.reload();
	}
}
