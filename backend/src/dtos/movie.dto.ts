export interface MovieCreateDTO {
  title: string;
  originalTitle: string;
  description: string;
  budget: number;
  releaseDate: string; // ou Date, dependendo do uso
  duration: number;
}

export type MovieUpdateDTO = Partial<MovieCreateDTO>
