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
var tours_service_1 = require('./services/tours.service');
var TourItineraryComponent = (function () {
    // Initialisation.
    function TourItineraryComponent(router, routeParams, toursService) {
        this.router = router;
        this.routeParams = routeParams;
        this.toursService = toursService;
        // Internal parameters.
        this.title = 'Your Tour Itinerary';
        this.map_center_lat = 0;
        this.map_center_lng = 0;
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
            min_lat = Math.min(min_lat, cities[i].coords.lat);
            max_lat = Math.max(max_lat, cities[i].coords.lat);
            min_lng = Math.min(min_lng, cities[i].coords.lng);
            max_lng = Math.max(max_lng, cities[i].coords.lng);
        }
        this.map_center_lat = (max_lat + min_lat) / 2;
        this.map_center_lng = (max_lng + min_lng) / 2;
    };
    TourItineraryComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/templates/tour-itinerary.component.html',
            styleUrls: ['app/assets/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: []
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, tours_service_1.ToursService])
    ], TourItineraryComponent);
    return TourItineraryComponent;
}());
exports.TourItineraryComponent = TourItineraryComponent;
//# sourceMappingURL=tour-itinerary.component.js.map