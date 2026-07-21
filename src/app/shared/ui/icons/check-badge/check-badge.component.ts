import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'icon-check-badge',
  imports: [],
  templateUrl: './check-badge.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckBadgeComponent {
	strokeName = input<string>("currentColor");
	className = input<string>("size-6");
}
