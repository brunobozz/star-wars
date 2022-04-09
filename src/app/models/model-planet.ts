import { ModelFilm } from './model-film';
import { ModelPeople } from './model-people';

export interface ModelPlanet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<ModelFilm>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<ModelPeople>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}
