import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsRoutingModule } from './destinations-routing.module';
import { TravelCardComponent } from './travel-card/travel-card.component';
import { TravelDestinationsComponent } from './travel-destinations/travel-destinations.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TravelCardComponent, TravelDestinationsComponent],
  imports: [CommonModule, DestinationsRoutingModule, RouterModule],
})
export class DestinationsModule {}
