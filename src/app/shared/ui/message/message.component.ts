import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { MessageSeverity } from './message.types';

@Component({
  selector: 'app-message',
  imports: [MessageModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
  severity = input.required<MessageSeverity>();
  classes = input<string>();
}