import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'icon-check-circle',
  imports: [],
  templateUrl: './check-circle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckCircleComponent {
  strokeName = input<string>("currentColor");
	className = input<string>("size-6");
}
