import { Component, OnInit, Input } from '@angular/core';
import { Tour, City } from './tour';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ToursService } from './tours.service';

@Component({
  templateUrl: 'app/city-details.component.html',
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
})

export class CityDetailsComponent {
  // Internal parameters.
  title = 'Add/Edit City';
  tourId: number;
  city: City;
  cityOriginal: string;
  
  
  // Initialisation.
  constructor(private router: Router,
              private routeParams: RouteParams,
              private toursService: ToursService) {
  }
  
  getCity(tourId: number, cityId: number) {
    this.toursService.getCity(tourId, cityId).then(result => {
      if (result[0] === null) {
        console.log('error');
      } else {
        this.tourId = tourId;
        if (result[1] === null) {
          this.city = new City;
          this.city.id = 0;
          this.city.name = '';
        } else {
          this.city = result[1];
          this.cityOriginal = result[1].name;
        }
      }
    });
  }
  
  ngOnInit() {
    let tourId = +this.routeParams.get('tourId');
    let cityId = +this.routeParams.get('cityId');
    this.getCity(tourId, cityId);
  }
 
  // Functions.
  saveCity() {
    if (this.city.id == 0) {
      this.toursService.saveCity(this.tourId, this.city.name);
    }
    this.goBackToTour();
  }
  
  cancelCity() {
    this.city.name = this.cityOriginal;
    this.goBackToTour();
  }
  
  goBackToTour() {
    let link = ['TourItinerary', { tourId: this.tourId }];
    this.router.navigate(link);
  }
}

