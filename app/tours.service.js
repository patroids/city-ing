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
var ToursService = (function () {
    function ToursService() {
    }
    ToursService.prototype.getTours = function () {
        return Promise.resolve(TOURS);
    };
    ToursService.prototype.getTour = function (tourId) {
        var tour = TOURS.filter(function (tour) { return tour.id === tourId; })[0];
        return Promise.resolve(tour);
    };
    ToursService.prototype.getCity = function (tourId, cityId) {
        var tour = TOURS.filter(function (tour) { return tour.id === tourId; })[0];
        var city = tour.cities.filter(function (city) { return city.id === cityId; })[0];
        return Promise.resolve([tour, city]);
    };
    ToursService.prototype.saveCity = function (tourId, cityName) {
        var tour = TOURS.filter(function (tour) { return tour.id === tourId; })[0];
        var lastCity = tour.cities[tour.cities.length - 1];
        if (tour) {
            var newCity = new tour_1.City;
            newCity.id = lastCity.id + 1;
            newCity.name = cityName;
            tour.cities.push(newCity);
        }
    };
    ToursService.prototype.deleteCity = function (tourId, cityId) {
        var tour = TOURS.filter(function (tour) { return tour.id === tourId; })[0];
        var i = 0;
        for (i = 0; i < tour.cities.length; i++) {
            if (tour.cities[i].id == cityId) {
                break;
            }
        }
        if (i < tour.cities.length) {
            tour.cities.splice(i, 1);
        }
    };
    ToursService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ToursService);
    return ToursService;
}());
exports.ToursService = ToursService;
var TOURS = [
    { 'id': 10,
        'name': 'Europe 2016',
        'cities': [
            { 'id': 1011, 'name': 'Paris', lat: 48.8566, lng: 2.3522 },
            { 'id': 1012, 'name': 'Dijon', lat: 47.3220, lng: 5.0415 },
            { 'id': 1013, 'name': 'Zermatt', lat: 46.0207, lng: 7.7491 },
            { 'id': 1014, 'name': 'Lucerne', lat: 47.0502, lng: 8.3093 },
            { 'id': 1015, 'name': 'Triberg', lat: 48.1302, lng: 8.2324 },
        ]
    },
    { 'id': 20,
        'name': 'USA 2016',
        'cities': [
            { 'id': 2021, 'name': 'San Francisco' },
            { 'id': 2022, 'name': 'Los Angeles' },
            { 'id': 2023, 'name': 'San Diego' },
        ]
    }
];
//# sourceMappingURL=tours.service.js.map