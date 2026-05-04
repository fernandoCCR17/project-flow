import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { AdvantagesSectionComponent } from "../../components/advantages-section/advantages-section.component";
import { PricingSectionComponent } from "../../components/pricing-section/pricing-section.component";
import { NavbarSectionComponent } from "../../components/navbar-section/navbar-section.component";
import { FooterSectionComponent } from "../../components/footer-section/footer-section.component";

@Component({
  selector: 'landing-page',
  imports: [HeroSectionComponent, AdvantagesSectionComponent, PricingSectionComponent, NavbarSectionComponent, FooterSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent { }
