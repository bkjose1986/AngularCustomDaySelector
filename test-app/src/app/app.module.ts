import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DaySelectorModule } from '../dayselector/daySelector.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DaySelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
