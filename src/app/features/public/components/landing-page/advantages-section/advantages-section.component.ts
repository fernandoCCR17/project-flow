import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "@shared/ui/card/card/card.component";

interface itemCard {
  icon: string,
  title: string,
  description: string
} 

@Component({
  selector: 'advantages-section',
  imports: [CardComponent, NgClass],
  templateUrl: './advantages-section.component.html',
  styleUrl: './advantages-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvantagesSectionComponent {
  itemsCards = signal<itemCard[]>([
    {
      icon: "pi-building",
      title: "Multi-Tenancy",
      description: "Isolate data and manage multiple sub-organizations or departments within a single unified workspace.",
    },
    {
      icon: "pi-clipboard",
      title: "Kanban Boards",
      description: "Visualize your progress with intuitive drag-and-drop boards. Customize workflows to fit your team's specif needs.",
    },
    {
      icon: "pi-users",
      title: "Team Collaboration",
      description: "Real-time comments, file sharing, and activity logs keep everyone on the same page, no matter where they work.",
    }
  ])

}
