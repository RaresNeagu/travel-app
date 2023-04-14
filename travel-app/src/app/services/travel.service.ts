import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private readonly destinations = [
    {
      title: 'Paris, France',
      image: '/assets/joe-gardner.jpg',
      description: 'Explore the City of Love and its iconic landmarks.',
    },
    {
      title: 'Tokyo, Japan',
      image: '/assets/yann-allegre.jpg',
      description: 'Experience the vibrant culture and cuisine of Japan.',
    },
    {
      title: 'Sydney, Australia',
      image: '/assets/sebastian-staines.jpg',
      description: 'Visit the world-famous Opera House and beautiful beaches.',
    },
    {
      title: 'Bora Bora, French Polynesia',
      image: '/assets/bora-bora.jpg',
      description:
        'Discover the city that never sleeps and its iconic landmarks.',
    },
  ];

  constructor() {}

  getDestinations() {
    return this.destinations;
  }
}
