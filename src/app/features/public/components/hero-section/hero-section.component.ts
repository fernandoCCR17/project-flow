import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent { }
