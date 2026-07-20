import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'icon-clock',
  imports: [],
  templateUrl: './clock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
  strokeName = input<string>("currentColor")
	className = input<string>("size-6")
}
