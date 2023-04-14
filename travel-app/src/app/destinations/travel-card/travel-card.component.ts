import { Component, Input, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss'],
})
export class TravelCardComponent implements OnInit {
  @Input() destination!: Destination;

  constructor() {}

  ngOnInit(): void {}
}
