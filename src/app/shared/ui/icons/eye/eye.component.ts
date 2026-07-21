import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'icon-eye',
  imports: [],
  templateUrl: './eye.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyeComponent {
  size = input<string>("size-6")
}
