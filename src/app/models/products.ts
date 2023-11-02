export interface Product {
  id: number;
  details: {
    max_shipment?: string;
    max_pressure?: string;
    noise?: string;
    dimension?: string;
    weight?: string;
    viscosity?: string;
    canistra?: string;
    aplicare?: string;
    necesar_aer?: string;
    mixare?: string;
    motor?: string;
    latime_lucru?: string;
    capacity?: string;
    air?: string;
    raport_amestec?: string;
  };
  name: string;
  imgFileName: string; // Image file name
}

export class IProductClass implements Product {
  id!: number;
  details!: {
    max_shipment?: string;
    max_pressure?: string;
    noise?: string;
    dimension?: string;
    weight?: string;
    viscosity?: string;
    canistra?: string;
    aplicare?: string;
    necesar_aer?: string;
    mixare?: string;
    motor?: string;
    latime_lucru?: string;
    capacity?: string;
    air?: string;
    raport_amestec?: string;
  };
  name!: string;
  imgFileName!: string;

  constructor(item: Product | null) {
    if (!item) return;
    this.id = item.id;
    this.details = {
      max_shipment: item.details.max_shipment,
      max_pressure: item.details.max_pressure,
      noise: item.details.noise,
      dimension: item.details.dimension,
      weight: item.details.weight,
      viscosity: item.details.viscosity,
      canistra: item.details.canistra,
      aplicare: item.details.aplicare,
      necesar_aer: item.details.necesar_aer,
      mixare: item.details.mixare,
      motor: item.details.motor,
      latime_lucru: item.details.latime_lucru,
      capacity: item.details.capacity,
      air: item.details.air,
      raport_amestec: item.details.raport_amestec,
    };
    this.name = item.name;
    this.imgFileName = item.imgFileName;
  }
}

export interface PompeBi {
  id: number;
  details: {
    raport_amestec?: string;
    max_shipment?: string;
    max_pressure?: string;
    air?: string;

    dimension?: string;
    weight?: string;

    aplicare?: string;
  };
  name: string;
  imgFileName: string; // Image file name
}
