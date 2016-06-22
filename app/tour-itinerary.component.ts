import { Component, OnInit } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Tour, City } from './tour';
import { ToursService } from './tours.service';
import { CityDetailsComponent } from './city-details.component';

@Component({
  templateUrl: 'app/tour-itinerary.component.html',
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, CityDetailsComponent],
})

export class TourItineraryComponent implements OnInit {
  // Internal parameters.
  title = 'Your Tour Itinerary';
  tour: Tour;
  
  // Initialisation.
  constructor(private router: Router,
              private routeParams: RouteParams,
              private toursService: ToursService) {
  }
  
  getTour(id: number) {
    this.toursService.getTour(id).then(tour => {
      this.title = 'Your Itinerary for ' + tour.name;
      this.tour = tour;
    });
  }
  
  ngOnInit() {
    let id = +this.routeParams.get('tourId');
    this.getTour(id);
  }
  
  // Functions.
  editCity(tourId: number, cityId: number) {
    let link = ['EditCity', { tourId: tourId, cityId: cityId }];
    this.router.navigate(link);
  }

  deleteCity(tourId: number, cityId: number) {
    this.toursService.deleteCity(tourId, cityId);
  }
}

