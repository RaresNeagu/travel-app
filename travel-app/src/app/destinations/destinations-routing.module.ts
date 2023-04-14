import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelDestinationsComponent } from './travel-destinations/travel-destinations.component';

const routes: Routes = [{ path: '', component: TravelDestinationsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DestinationsRoutingModule {}
