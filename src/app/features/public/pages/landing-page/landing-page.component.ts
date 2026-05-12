import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/landing-page/hero-section/hero-section.component";
import { AdvantagesSectionComponent } from "../../components/landing-page/advantages-section/advantages-section.component";
import { PricingSectionComponent } from "../../components/landing-page/pricing-section/pricing-section.component";
import { NavbarSectionComponent } from "../../components/landing-page/navbar-section/navbar-section.component";
import { FooterSectionComponent } from "../../components/landing-page/footer-section/footer-section.component";
import { MessageSectionComponent } from "../../components/landing-page/message-section/message-section.component";

@Component({
  selector: 'landing-page',
  imports: [HeroSectionComponent, AdvantagesSectionComponent, PricingSectionComponent, NavbarSectionComponent, FooterSectionComponent, MessageSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent { }
