import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'icon-eye-slash',
  imports: [],
  templateUrl: './eye-slash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EyeSlashComponent {
  size = input<string>("size-6")
}
