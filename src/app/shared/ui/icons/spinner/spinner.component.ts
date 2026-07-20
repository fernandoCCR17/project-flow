import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-spinner',
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {}
