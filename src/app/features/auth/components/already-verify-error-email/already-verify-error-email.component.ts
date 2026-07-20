import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardComponent } from "@shared/ui/card/card/card.component";
import { CardHeaderDirective } from "@shared/directives/card/card-header.directive";
import { CardBodyDirective } from "@shared/directives/card/card-body.directive";
import { RouterLink } from "@angular/router";
import { CheckBadgeComponent } from "@shared/ui/icons/check-badge/check-badge.component";

@Component({
  selector: 'already-verify-error-email',
  imports: [CardComponent, CardHeaderDirective, CardBodyDirective, RouterLink, CheckBadgeComponent],
  templateUrl: './already-verify-error-email.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlreadyVerifyErrorEmailComponent {
  message = input<string>();
}
