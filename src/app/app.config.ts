import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { MemoryBreweriesData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';
import { isStandalone } from '@testing/standalone-mode/standalone-mode';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: BreweriesData,
      useClass: isStandalone() ? MemoryBreweriesData : MemoryBreweriesData,
    },
  ],
};
