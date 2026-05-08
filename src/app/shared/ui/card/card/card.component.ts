import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-card',
  imports: [CardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent { 
  clases = input<string>()
}
