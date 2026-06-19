import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'icon-bolt',
  imports: [],
  templateUrl: './bolt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoltComponent { 
  strokeColor = input("#000");
  size = input("size-6");
}
