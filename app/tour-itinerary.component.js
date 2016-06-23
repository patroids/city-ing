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
var core_2 = require('angular2-google-maps/core');
var lazy_maps_api_loader_1 = require('angular2-google-maps/core/services/maps-api-loader/lazy-maps-api-loader');
var maps_api_loader_1 = require('angular2-google-maps/core/services/maps-api-loader/maps-api-loader');
var TourItineraryComponent = (function () {
    // Initialisation.
    function TourItineraryComponent(router, routeParams, toursService, mapConfig, mapLoader) {
        this.router = router;
        this.routeParams = routeParams;
        this.toursService = toursService;
        this.mapConfig = mapConfig;
        this.mapLoader = mapLoader;
        // Internal parameters.
        this.title = 'Your Tour Itinerary';
        this.map_center_lat = 0;
        this.map_center_lng = 0;
        mapConfig.apiKey = 'AIzaSyCreiHKHfqZfIwCwD7al9_pJKUzkMRipT8';
        mapConfig.libraries = ['places'];
        mapLoader.load().then(function () {
            console.log(google.maps.places.RankBy.DISTANCE);
        });
    }
    TourItineraryComponent.prototype.getTour = function (id) {
        var _this = this;
        this.toursService.getTour(id).then(function (tour) {
            _this.title = 'Your Itinerary for ' + tour.name;
            _this.tour = tour;
            _this._calculateMapCenter(tour.cities);
        });
    };
    TourItineraryComponent.prototype.ngOnInit = function () {
        var id = +this.routeParams.get('tourId');
        this.getTour(id);
    };
    // Functions.
    TourItineraryComponent.prototype.editCity = function (tourId, cityId) {
        var link = ['EditCity', { tourId: tourId, cityId: cityId }];
        this.router.navigate(link);
    };
    TourItineraryComponent.prototype.deleteCity = function (tourId, cityId) {
        this.toursService.deleteCity(tourId, cityId);
    };
    TourItineraryComponent.prototype.centerChange = function (arg) {
        //console.log('centerChange', arg);
    };
    TourItineraryComponent.prototype._calculateMapCenter = function (cities) {
        var min_lat = 90, max_lat = -90;
        var min_lng = 180, max_lng = -180;
        for (var i = 0; i < cities.length; i++) {
            min_lat = Math.min(min_lat, cities[i].lat);
            max_lat = Math.max(max_lat, cities[i].lat);
            min_lng = Math.min(min_lng, cities[i].lng);
            max_lng = Math.max(max_lng, cities[i].lng);
        }
        this.map_center_lat = (max_lat + min_lat) / 2;
        this.map_center_lng = (max_lng + min_lng) / 2;
    };
    TourItineraryComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/tour-itinerary.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, core_2.GOOGLE_MAPS_DIRECTIVES],
            providers: [maps_api_loader_1.MapsAPILoader, lazy_maps_api_loader_1.LazyMapsAPILoaderConfig, core_2.GOOGLE_MAPS_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, tours_service_1.ToursService, lazy_maps_api_loader_1.LazyMapsAPILoaderConfig, maps_api_loader_1.MapsAPILoader])
    ], TourItineraryComponent);
    return TourItineraryComponent;
}());
exports.TourItineraryComponent = TourItineraryComponent;
//# sourceMappingURL=tour-itinerary.component.js.map