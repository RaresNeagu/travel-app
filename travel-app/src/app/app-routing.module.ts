import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelDestinationsComponent } from './destinations/travel-destinations/travel-destinations.component';
import { TravelPageComponent } from './travel-page/travel-page.component';

const routes: Routes = [
  { path: '', component: TravelDestinationsComponent, pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./destinations/destinations.module').then(
        (m) => m.DestinationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
