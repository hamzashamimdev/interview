import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

console.log("1️⃣ main.ts loaded");
bootstrapApplication(AppComponent, appConfig)
  .catch((err) =>
    // console.error(err);
  console.log("2️⃣ AppModule bootstrapped"));
