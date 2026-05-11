import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardBodyDirective } from '@shared/directives/card/card-body.directive';
import { CardSubtitleDirective } from '@shared/directives/card/card-subtitle.directive';
import { CardTitleDirective } from '@shared/directives/card/card-title.directive';
import { CardComponent } from "@shared/ui/card/card/card.component";

interface itemCard {
  title: string,
  subtitle: string,
  price: number,
  listAdvantages: string[],
  labelButton: string
} 

@Component({
  selector: 'pricing-section',
  imports: [CardComponent, CardTitleDirective, CardSubtitleDirective, CardBodyDirective, NgClass],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSectionComponent {
  itemsCard = signal<itemCard[]>([
    {
      title: "Free",
      subtitle: "Perfect for inviduals",
      price: 0,
      listAdvantages: [
        "Up to 3 projects",
        "Unlimited tasks",
        "Basic Kanban"
      ],
      labelButton: 'Start For Free'
    },
    {
      title: 'Pro',
      subtitle: 'Best for growing teams',
      price: 29,
      listAdvantages: [
        "Unlimited projects",
        "Priority support",
        "Advanced analytics",
        "Custom fields"
      ],
      labelButton: 'Start Pro Trial'
    },
    {
      title: 'Enterprise',
      subtitle: 'For large organizations',
      price: 99,
      listAdvantages: [
        "Multi-tenant management",
        "SSO & Advanced Security",
        "Dedicated Manager"
      ],
      labelButton: 'Contact Sales'
    }
  ])
}
