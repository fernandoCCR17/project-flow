import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BoltComponent } from "@shared/ui/icons/bolt/bolt.component";

@Component({
  selector: 'footer-section',
  imports: [BoltComponent],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterSectionComponent { 
  dictionarySections = signal<{[key: string]: string[]}>({
    "Product": ["Features", "Pricing", "API Documentation"],
    "Company": ["About Us", "Careers", "Blog"],
    "Support": ["Help Center", "Privacy Policy", "Terms of Service"],
  })

  arraySections = signal<string[]>(["Product", "Company", "Support"]);
}
