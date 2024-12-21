import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/components/home/home/home.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

bootstrapApplication(HomeComponent, appConfig).catch((err) =>
  console.error(err)
);

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));