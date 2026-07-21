import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "@shared/ui/card/card/card.component";
import { CardHeaderDirective } from "@shared/directives/card/card-header.directive";
import { CardBodyDirective } from "@shared/directives/card/card-body.directive";
import { CheckCircleComponent } from "@shared/ui/icons/check-circle/check-circle.component";

@Component({
  selector: 'succeed-email-verify',
  imports: [CardComponent, CardHeaderDirective, CardBodyDirective, CheckCircleComponent],
  templateUrl: './succeed-email-verify.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SucceedEmailVerifyComponent {}
