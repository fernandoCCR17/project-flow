import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'navbar-anchors',
  imports: [RouterLink],
  templateUrl: './navbar-anchors.component.html',
  styleUrl: './navbar-anchors.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarAnchorsComponent {
  closeMenu = output<void>();

  handleClick() {
    this.closeMenu.emit();
  }
}
