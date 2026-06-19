import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BoltComponent } from "@shared/ui/icons/bolt/bolt.component";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, BoltComponent, RouterLink],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
  private readonly location = inject(Location);

   goBack(): void {
    this.location.back();
  }
}
