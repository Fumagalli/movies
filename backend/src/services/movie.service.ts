import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movie.entity";

export class MovieService {
  static async list() {
    const repo = AppDataSource.getRepository(Movie);
    return repo.find();
  }

  static async create(data: Partial<Movie>) {
    const repo = AppDataSource.getRepository(Movie);
    const movie = repo.create(data);
    await repo.save(movie);
    return movie;
  }

  static async getById(id: number) {
    const repo = AppDataSource.getRepository(Movie);
    return repo.findOneBy({ id });
  }

  static async update(id: number, data: Partial<Movie>) {
    const repo = AppDataSource.getRepository(Movie);
    await repo.update(id, data);
    return repo.findOneBy({ id });
  }

  static async remove(id: number) {
    const repo = AppDataSource.getRepository(Movie);
    await repo.delete(id);
  }
}
