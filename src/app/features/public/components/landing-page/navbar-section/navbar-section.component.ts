import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavbarAnchorsComponent } from "./components/navbar-anchors/navbar-anchors.component";
import { BoltComponent } from '@shared/ui/icons/bolt/bolt.component';
import { Bars3Component } from '@shared/ui/icons/bars-3/bars-3.component';
import { NavbarMobileMenuComponent } from "./components/navbar-mobile-menu/navbar-mobile-menu.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'navbar-section',
  imports: [BoltComponent, Bars3Component, NavbarAnchorsComponent, NavbarMobileMenuComponent, RouterLink],
  templateUrl: './navbar-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSectionComponent {
  showMenu = signal(false);

  handleMobileMenu(){
    this.showMenu.set(!this.showMenu());
  }
}
