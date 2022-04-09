import { ModelFilm } from './model-film';
import { ModelPlanet } from './model-planet';
import { ModelSpecie } from './model-specie';
import { ModelStarship } from './model-starship';
import { ModelVehicle } from './model-vehicle';

export interface ModelPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: ModelPlanet;
  films: Array<ModelFilm>;
  species: ModelSpecie;
  vehicles: Array<ModelVehicle>;
  starships: Array<ModelStarship>;
  created: string;
  edited: string;
  url: string;
}
