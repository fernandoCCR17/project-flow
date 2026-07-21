import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageComponent } from "@shared/ui/message/message.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'hero-section',
  imports: [MessageComponent, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent { }
