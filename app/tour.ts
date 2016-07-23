export class Coords {
  lat: number;
  lng: number;
}

export class City {
  id: number;
  name: string;
  coords: Coords;
  /*
  desc: text;
  */
}

export class Tour {
  id: number;
  name: string;
  cities: City[]
}

