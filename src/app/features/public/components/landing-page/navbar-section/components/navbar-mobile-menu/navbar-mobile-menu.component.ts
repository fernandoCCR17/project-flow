import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { XMarkComponent } from "@shared/ui/icons/x-mark/x-mark.component";
import { NavbarAnchorsComponent } from "../navbar-anchors/navbar-anchors.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'navbar-mobile-menu',
  imports: [NgClass, XMarkComponent, NavbarAnchorsComponent],
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrl: './navbar-mobile-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMobileMenuComponent {
  isOpen = input<boolean>();
  closeMenu = output<void>();

  close() {
    this.closeMenu.emit();
  }
}
