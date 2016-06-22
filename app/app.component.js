"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var tours_service_1 = require('./tours.service');
var tours_component_1 = require('./tours.component');
var tour_itinerary_component_1 = require('./tour-itinerary.component');
var city_details_component_1 = require('./city-details.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Your Tours';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <router-outlet></router-outlet>\n  ",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                tours_component_1.ToursComponent
            ],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                tours_service_1.ToursService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Tours',
                component: tours_component_1.ToursComponent,
                useAsDefault: true
            }, {
                path: '/tour/:tourId',
                name: 'TourItinerary',
                component: tour_itinerary_component_1.TourItineraryComponent
            }, {
                path: '/tour/:tourId/city/:cityId',
                name: 'EditCity',
                component: city_details_component_1.CityDetailsComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map