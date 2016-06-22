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
var city_details_component_1 = require('./city-details.component');
var TourItineraryComponent = (function () {
    // Initialisation.
    function TourItineraryComponent(router, routeParams, toursService) {
        this.router = router;
        this.routeParams = routeParams;
        this.toursService = toursService;
        // Internal parameters.
        this.title = 'Your Tour Itinerary';
    }
    TourItineraryComponent.prototype.getTour = function (id) {
        var _this = this;
        this.toursService.getTour(id).then(function (tour) {
            _this.title = 'Your Itinerary for ' + tour.name;
            _this.tour = tour;
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
    TourItineraryComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/tour-itinerary.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, city_details_component_1.CityDetailsComponent],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, tours_service_1.ToursService])
    ], TourItineraryComponent);
    return TourItineraryComponent;
}());
exports.TourItineraryComponent = TourItineraryComponent;
//# sourceMappingURL=tour-itinerary.component.js.map