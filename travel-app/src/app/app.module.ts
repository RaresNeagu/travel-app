import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelPageComponent } from './travel-page/travel-page.component';

@NgModule({
  declarations: [AppComponent, TravelPageComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forChild([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
