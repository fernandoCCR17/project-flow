import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'loader-circle',
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleComponent {
  classes = input.required<string>();
}
