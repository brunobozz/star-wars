import { ModelPeople } from './model-people';
import { ModelPlanet } from './model-planet';
import { ModelSpecie } from './model-specie';
import { ModelStarship } from './model-starship';
import { ModelVehicle } from './model-vehicle';

export interface ModelFilm {
  characters: Array<ModelPeople>;
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: Array<ModelPlanet>;
  producer: string;
  release_date: string;
  species: Array<ModelSpecie>;
  starships: Array<ModelStarship>;
  title: string;
  url: string;
  vehicles: Array<ModelVehicle>;
}
