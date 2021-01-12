import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LicenseManager } from 'ag-grid-enterprise/main';
LicenseManager.setLicenseKey("CompanyName=Crayon,LicensedApplication=AG-Grid,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-008037,ExpiryDate=7_May_2021_[v2]_MTYyMDM0MjAwMDAwMA==836164f9f4019935c52e933c6bb46f59");

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
