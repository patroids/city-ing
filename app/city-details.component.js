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
var tour_1 = require('./tour');
var router_deprecated_1 = require('@angular/router-deprecated');
var tours_service_1 = require('./tours.service');
var CityDetailsComponent = (function () {
    // Initialisation.
    function CityDetailsComponent(router, routeParams, toursService) {
        this.router = router;
        this.routeParams = routeParams;
        this.toursService = toursService;
        // Internal parameters.
        this.title = 'Add/Edit City';
    }
    CityDetailsComponent.prototype.getCity = function (tourId, cityId) {
        var _this = this;
        this.toursService.getCity(tourId, cityId).then(function (result) {
            if (result[0] === undefined) {
                console.log('error');
            }
            else {
                _this.tourId = tourId;
                if (result[1] === undefined) {
                    _this.city = new tour_1.City;
                    _this.city.id = 0;
                    _this.city.name = '';
                }
                else {
                    _this.city = result[1];
                    _this.cityOriginal = result[1].name;
                }
            }
        });
    };
    CityDetailsComponent.prototype.ngOnInit = function () {
        var tourId = +this.routeParams.get('tourId');
        var cityId = +this.routeParams.get('cityId');
        this.getCity(tourId, cityId);
    };
    // Functions.
    CityDetailsComponent.prototype.saveCity = function () {
        if (this.city.id == 0) {
            this.toursService.saveCity(this.tourId, this.city.name);
        }
        this.goBackToTour();
    };
    CityDetailsComponent.prototype.cancelCity = function () {
        this.city.name = this.cityOriginal;
        this.goBackToTour();
    };
    CityDetailsComponent.prototype.goBackToTour = function () {
        var link = ['TourItinerary', { tourId: this.tourId }];
        this.router.navigate(link);
    };
    CityDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/city-details.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, tours_service_1.ToursService])
    ], CityDetailsComponent);
    return CityDetailsComponent;
}());
exports.CityDetailsComponent = CityDetailsComponent;
//# sourceMappingURL=city-details.component.js.map