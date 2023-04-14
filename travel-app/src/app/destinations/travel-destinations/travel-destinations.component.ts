import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-destinations',
  templateUrl: './travel-destinations.component.html',
  styleUrls: ['./travel-destinations.component.scss'],
})
export class TravelDestinationsComponent implements OnInit {
  arrayOfDestinations!: Destination[];

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.arrayOfDestinations = this.travelService.getDestinations();
  }
}
