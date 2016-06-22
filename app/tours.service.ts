import { Injectable } from '@angular/core';
import { Tour, City } from './tour';

@Injectable()
export class ToursService {
  getTours() {
    return Promise.resolve(TOURS);
  }
  
  getTour(tourId: number) {
    let tour = TOURS.filter(tour => tour.id === tourId)[0];
    return Promise.resolve(tour);
  }
  
  getCity(tourId: number, cityId: number) {
    let tour = TOURS.filter(tour => tour.id === tourId)[0];
    let city = tour.cities.filter(city => city.id === cityId)[0];
    return Promise.resolve([tour, city]);
  }
  
  saveCity(tourId: number, cityName: string) {
    let tour = TOURS.filter(tour => tour.id === tourId)[0];
    let lastCity = tour.cities[tour.cities.length - 1];
    
    if (tour) {
      let newCity = new City;
      newCity.id = lastCity.id + 1;
      newCity.name = cityName;
      tour.cities.push(newCity);
    }
  }
  
  deleteCity(tourId: number, cityId: number) {
    let tour = TOURS.filter(tour => tour.id === tourId)[0];
    let i = 0;
    for (i = 0; i < tour.cities.length; i++) {
      if (tour.cities[i].id == cityId) {
        break;
      }
    }
    
    if (i < tour.cities.length) {
      tour.cities.splice(i,1);
    }
    
  }
}


var TOURS: Tour[] = [
  { 'id': 10,
    'name': 'Europe 2016',
    'cities': [
      { 'id': 1011, 'name': 'Paris' },
      { 'id': 1012, 'name': 'Dijon' },
      { 'id': 1013, 'name': 'Zermatt' },
      { 'id': 1014, 'name': 'Lucerne' },
      { 'id': 1015, 'name': 'Triberg' },
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