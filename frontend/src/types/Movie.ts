export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  releaseDate: string;
  duration: number;
}

export interface MovieCreateDTO {
  title: string;
  originalTitle: string;
  description: string;
  budget: number;
  releaseDate: string;
  duration: number;
}

export interface MovieListResponse {
  data: Movie[];
  total: number;
  page: number;
  limit: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}
