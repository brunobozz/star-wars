import { ModelFilm } from './model-film';
import { ModelPeople } from './model-people';

export interface ModelStarship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: Array<ModelFilm>;
  pilots: Array<ModelPeople>;
  starship_class: string;
  url: string;
}
