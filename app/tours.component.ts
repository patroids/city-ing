import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Tour, City } from './tour';
import { ToursService } from './tours.service';
import { TourItineraryComponent } from './tour-itinerary.component';

@Component({
  templateUrl: 'app/tours.component.html',
  styleUrls:['app/app.component.css'],
  directives: [TourItineraryComponent],
})

export class ToursComponent implements OnInit {
  // Internal parameters.
  tours: Tour[];
  
  // Initialisation.
  constructor(private router: Router,
              private toursService: ToursService) {
  }
  
  getTours() {
    this.toursService.getTours().then(tours => this.tours = tours);
  }
  
  ngOnInit() {
    this.getTours();
  }
  
  // Functions.
  gotoTour(tour: Tour) {
    let link = ['TourItinerary', { tourId: tour.id }];
    this.router.navigate(link);
  }
}

