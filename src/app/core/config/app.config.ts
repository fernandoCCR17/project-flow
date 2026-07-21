import { providePrimeNG } from 'primeng/config';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeuix/themes/aura';

import { routes } from '../../app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AppTitleStrategy } from './app-title.strategy';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy
    },
    MessageService,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    providePrimeNG({
      theme: {
        preset: Aura,
         options: {
          darkModeSelector: false
        }
      }
     })
  ]
};
