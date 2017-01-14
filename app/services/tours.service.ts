import { Injectable } from '@angular/core';
import { Tour, City, Coords } from '../classes/tour';

@Injectable()
export class ToursService {
  getTours():Promise<Tour[]> {
    return Promise.resolve(TOURS);
  }
  
  getTour(tourId: number):Promise<Tour> {
    let tour = TOURS.filter(tour => tour.id === tourId)[0];
    return Promise.resolve(tour);
  }
  
  getCity(tourId: number, cityId: number):Promise<[Tour, City]> {
    let tour = TOURS.filter(tour => tour.id === tourId)[0];
    
    if (tour) {
      let city = tour.cities.filter(city => city.id === cityId)[0];
      
      if (city) {
        return Promise.resolve([tour, city]);
      } else {
        return Promise.resolve(<[Tour, City]>[tour, null]);
      }
      
    } else {
      return Promise.resolve(<[Tour, City]>[null, null]);
    }
    
  }
  
  saveCity(tourId: number, cityName: string):void {
    let tour = TOURS.filter(tour => tour.id === tourId)[0];
    let lastCity = tour.cities[tour.cities.length - 1];
    
    if (tour) {
      let newCity = new City;
      newCity.id = lastCity.id + 1;
      newCity.name = cityName;
      tour.cities.push(newCity);
    }
  }
  
  deleteCity(tourId: number, cityId: number):void {
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
      { 'id': 1011, 'name': 'Paris', 'coords': { 'lat': 48.8566, 'lng': 2.3522 } },
      { 'id': 1012, 'name': 'Dijon', 'coords': { 'lat': 47.3220, 'lng': 5.0415 } },
      { 'id': 1013, 'name': 'Zermatt', 'coords': { 'lat': 46.0207, 'lng': 7.7491 } },
      { 'id': 1014, 'name': 'Lucerne', 'coords': { 'lat': 47.0502, 'lng': 8.3093 } },
      { 'id': 1015, 'name': 'Triberg', 'coords': { 'lat': 48.1302, 'lng': 8.2324 } },
    ]
  },
  { 'id': 20,
    'name': 'USA 2016',
    'cities': [
      { 'id': 2021, 'name': 'San Francisco', 'coords': { 'lat': 0, 'lng': 0 } },
      { 'id': 2022, 'name': 'Los Angeles', 'coords': { 'lat': 0, 'lng': 0 } },
      { 'id': 2023, 'name': 'San Diego', 'coords': { 'lat': 0, 'lng': 0 } },
    ]
  }
];