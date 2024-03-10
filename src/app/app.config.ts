import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LocalStorageProvider } from 'ngx-webstorage/lib/core/nativeStorage';

export const appConfig: ApplicationConfig = {
  providers: [LocalStorageProvider, provideHttpClient(withFetch()),provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
