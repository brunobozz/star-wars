import { ModelFilm } from './model-film';
import { ModelPeople } from './model-people';

export interface ModelVehicle {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: Array<ModelPeople>;
  films: Array<ModelFilm>;
  url: string;
  vehicle_class: string;
}
