import { inject, Injectable } from '@angular/core';
import { ToastConfig } from './toast.interface';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly messageService = inject(MessageService);

  show(config: ToastConfig){
    const { message, severity, title } = config;

    this.messageService.add({
      severity,
      summary: title,
      detail: message
    });
  }
}
