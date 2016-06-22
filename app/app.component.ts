import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ToursService } from './tours.service';
import { ToursComponent } from './tours.component';
import { TourItineraryComponent } from './tour-itinerary.component';
import { CityDetailsComponent } from './city-details.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    ToursComponent
  ],
  providers: [
    ROUTER_PROVIDERS,
    ToursService
  ]
})

@RouteConfig([
  {
    path: '/',
    name: 'Tours',
    component: ToursComponent,
    useAsDefault: true
  }, {
    path: '/tour/:tourId',
    name: 'TourItinerary',
    component: TourItineraryComponent
  }, {
    path: '/tour/:tourId/city/:cityId',
    name: 'EditCity',
    component: CityDetailsComponent
  }
])

export class AppComponent {
  title = 'Your Tours';
  
}

