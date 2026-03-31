import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { MemoryBreweriesData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';
import { isStandalone } from '@testing/standalone-mode/standalone-mode';
import { OpenBreweryDbService } from 'src/integrations/open-brewery-db/open-brewery-db.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: BreweriesData,
      useClass: isStandalone() ? MemoryBreweriesData : OpenBreweryDbService,
    },
  ],
};
