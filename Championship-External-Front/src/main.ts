/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
// registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS3xRd0JgXn9fcX1XQA==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEdhWHhdd3RURGBaVw==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdhW35Zc3NVR2JeUkI=;MTE4MzE0MkAzMjMwMmUzNDJlMzBWTmVzU0IwQkxtT3g2QjJzOEFLa1M0N0YzSjNpTzNpMHVoSkNmRlV1N2JJPQ==;MTE4MzE0M0AzMjMwMmUzNDJlMzBlZk01d2ZDcUxSbjBrUFBMbDBFUnlrc0NPZkpWY1FJc05JNjlxUXNyZU8wPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhW31fd3dSRmFeWEJx;MTE4MzE0NUAzMjMwMmUzNDJlMzBhRkp4bTJRL09Nb1dGQ3hSNGRpZE12UERlNG50NG52azk1UTI4bVFJOVhnPQ==;MTE4MzE0NkAzMjMwMmUzNDJlMzBQY2U2a0lPL2liRkpwRzBkL2xWeVYwNXJGNEp5YUdOOHQrbzZmSzVKL2xjPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdhW35Zc3NVR2NbWEY=;MTE4MzE0OEAzMjMwMmUzNDJlMzBsTjlvRkErWGtMenJyMUcvYjdhblhNTFRaS1JsV1F1dk83dXR0L0t0am5BPQ==;MTE4MzE0OUAzMjMwMmUzNDJlMzBSUlV1SC9TdmJtK3RFU1AycDg2aUFDK3l4SGI4ejdMMFdrQUZ5Z3FiYU00PQ==;MTE4MzE1MEAzMjMwMmUzNDJlMzBhRkp4bTJRL09Nb1dGQ3hSNGRpZE12UERlNG50NG52azk1UTI4bVFJOVhnPQ==');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
