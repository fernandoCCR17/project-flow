import { ChangeDetectionStrategy, Component, ContentChild, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgClass } from '@angular/common';
import { CardHeaderDirective } from '@shared/directives/card/card-header.directive';
import { CardBodyDirective } from '@shared/directives/card/card-body.directive';
import { CardFooterDirective } from '@shared/directives/card/card-footer.directive';
import { CardSubtitleDirective } from '@shared/directives/card/card-subtitle.directive';
import { CardTitleDirective } from '@shared/directives/card/card-title.directive';

@Component({
  selector: 'app-card',
  imports: [CardModule, NgClass],  // ← Solo CardModule aquí, sin las directivas
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @ContentChild(CardHeaderDirective, { descendants: true })
  header?: CardHeaderDirective;

  @ContentChild(CardTitleDirective, { descendants: true })
  title?: CardTitleDirective;

  @ContentChild(CardSubtitleDirective, { descendants: true })
  subtitle?: CardSubtitleDirective;

  @ContentChild(CardBodyDirective, { descendants: true })
  body?: CardBodyDirective;

  @ContentChild(CardFooterDirective, { descendants: true })
  footer?: CardFooterDirective;

  clases = input<string>();
  background = input<string>();
}