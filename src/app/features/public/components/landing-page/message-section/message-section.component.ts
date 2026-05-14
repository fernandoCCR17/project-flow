import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'message-section',
  imports: [RouterLink],
  templateUrl: './message-section.component.html',
  styleUrl: './message-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageSectionComponent {}
