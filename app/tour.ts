export class City {
  id: number;
  name: string;
  /*
  coords: { lat: float, lng: float };
  desc: text;
  */
}

export class Tour {
  id: number;
  name: string;
  cities: City[]
}

