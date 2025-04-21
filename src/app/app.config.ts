import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';


import { provideTanStackQuery, withDevtools } from '@tanstack/angular-query-experimental';
import { QueryClient } from '@tanstack/query-core';


export const appConfig: ApplicationConfig = {
  providers: [
       // provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideExperimentalZonelessChangeDetection(),
      provideTanStackQuery(new QueryClient(), withDevtools()),
      provideMarkdown(),
    ]
};
