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
var tour_itinerary_component_1 = require('./tour-itinerary.component');
var ToursComponent = (function () {
    // Initialisation.
    function ToursComponent(router, toursService) {
        this.router = router;
        this.toursService = toursService;
    }
    ToursComponent.prototype.getTours = function () {
        var _this = this;
        this.toursService.getTours().then(function (tours) { return _this.tours = tours; });
    };
    ToursComponent.prototype.ngOnInit = function () {
        this.getTours();
    };
    // Functions.
    ToursComponent.prototype.gotoTour = function (tour) {
        var link = ['TourItinerary', { tourId: tour.id }];
        this.router.navigate(link);
    };
    ToursComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/tours.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [tour_itinerary_component_1.TourItineraryComponent],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, tours_service_1.ToursService])
    ], ToursComponent);
    return ToursComponent;
}());
exports.ToursComponent = ToursComponent;
//# sourceMappingURL=tours.component.js.map