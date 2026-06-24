import { ApplicationConfig, provideBrowserGlobalErrorListeners, type inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { MemoryBreweriesData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';
import { isStandalone } from '@testing/standalone-mode/standalone-mode';
import { OpenBreweryDbService } from 'src/integrations/open-brewery-db/open-brewery-db.service';
import { AuthService } from '../auth/services/auth.service';
import { LocalAuthService } from '@testing/standalone-mode/services/local-auth.service';
import { SupabaseAuthService } from 'src/integrations/supabase/supabase-auth.service';
import { BreweryScheduleData } from '@core/brewery-schedule/brewery-schedule-data';
import { SupabaseBreweryScheduleData } from 'src/integrations/supabase/supabase-brewery-schedule-data';
import { MemoryScheduleData } from '@testing/integrations/memory-schedule-data/memory-schedule-data';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: BreweriesData,
      useClass: isStandalone() ? MemoryBreweriesData : OpenBreweryDbService,
    },
    { provide: AuthService, useClass: isStandalone() ? LocalAuthService : SupabaseAuthService },
    {
      provide: BreweryScheduleData,
      useClass: isStandalone() ? MemoryScheduleData : SupabaseBreweryScheduleData,
    },
  ],
};
