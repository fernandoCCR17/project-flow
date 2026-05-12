import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'message-section',
  imports: [],
  templateUrl: './message-section.component.html',
  styleUrl: './message-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageSectionComponent {}
