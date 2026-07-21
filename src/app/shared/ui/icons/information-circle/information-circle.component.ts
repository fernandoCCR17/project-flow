import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'icon-information-circle',
  imports: [],
  templateUrl: './information-circle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationCircleComponent {
  className = input<string>();
  strokeName = input<string>("currentColor");
}
