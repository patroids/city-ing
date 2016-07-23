import { Injectable, Component, OnInit } from '@angular/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Tour, City } from './tour';
import { ToursService } from './tours.service';
import { GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';
import { LazyMapsAPILoaderConfig } from 'angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader';
import { MapsAPILoader } from 'angular2-google-maps/core/services/maps-api-loader/maps-api-loader';

@Component({
  templateUrl: 'app/tour-itinerary.component.html',
  styleUrls:['app/app.component.css'],
  directives: [ ROUTER_DIRECTIVES, GOOGLE_MAPS_DIRECTIVES ],
  providers: [ MapsAPILoader, LazyMapsAPILoaderConfig, GOOGLE_MAPS_PROVIDERS ]
})

export class TourItineraryComponent implements OnInit {
  // Internal parameters.
  title = 'Your Tour Itinerary';
  tour: Tour;
  map_center_lat: number = 0;
  map_center_lng: number = 0;
  
  // Initialisation.
  constructor(private router: Router,
              private routeParams: RouteParams,
              private toursService: ToursService,
              private mapConfig: LazyMapsAPILoaderConfig,
              private mapLoader: MapsAPILoader) {
    mapConfig.apiKey = 'AIzaSyCreiHKHfqZfIwCwD7al9_pJKUzkMRipT8';
    mapConfig.libraries = ['places'];
    mapLoader.load().then(() => {
      //console.log(google.maps.places.RankBy.DISTANCE);
    });
  }
  
  getTour(id: number) {
    this.toursService.getTour(id).then(tour => {
      this.title = 'Your Itinerary for ' + tour.name;
      this.tour = tour;
      this._calculateMapCenter(tour.cities);
      
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
  
  centerChange(arg) {
    //console.log('centerChange', arg);
  }
  
  private _calculateMapCenter(cities) {
    let min_lat = 90, max_lat = -90;
    let min_lng = 180, max_lng = -180;
    for (let i = 0; i < cities.length; i++) {
      min_lat = Math.min(min_lat, cities[i].coords.lat);
      max_lat = Math.max(max_lat, cities[i].coords.lat);
      min_lng = Math.min(min_lng, cities[i].coords.lng);
      max_lng = Math.max(max_lng, cities[i].coords.lng);
    }
    
    this.map_center_lat = (max_lat + min_lat) / 2;
    this.map_center_lng = (max_lng + min_lng) / 2;
  }
}

