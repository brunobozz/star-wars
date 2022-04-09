import { ModelFilm } from './model-film';
import { ModelPeople } from './model-people';
import { ModelPlanet } from './model-planet';

export interface ModelSpecie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: ModelPlanet;
  language: string;
  name: string;
  people: Array<ModelPeople>;
  films: Array<ModelFilm>;
  skin_colors: string;
  url: string;
}
