import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movie.entity";
import { MovieListParams } from "../interfaces/MovieListParams";

export class MovieService {
  static async list(params: MovieListParams) {
    const repo = AppDataSource.getRepository(Movie);
    const qb = repo.createQueryBuilder("movie");

    if (params.q) {
      qb.andWhere("movie.title ILIKE :q OR movie.description ILIKE :q", { q: `%${params.q}%` });
    }
    if (params.minDuration) {
      qb.andWhere("movie.duration >= :minDuration", { minDuration: params.minDuration });
    }
    if (params.maxDuration) {
      qb.andWhere("movie.duration <= :maxDuration", { maxDuration: params.maxDuration });
    }
    if (params.startDate) {
      qb.andWhere("movie.releaseDate >= :startDate", { startDate: params.startDate });
    }
    if (params.endDate) {
      qb.andWhere("movie.releaseDate <= :endDate", { endDate: params.endDate });
    }

    const page = params.page && params.page > 0 ? params.page : 1;
    const limit = params.limit && params.limit > 0 ? params.limit : 10;
    qb.skip((page - 1) * limit).take(limit);

    const [data, total] = await qb.getManyAndCount();
    const lastPage = Math.ceil(total / limit);

    return {
      data,
      total,
      page,
      limit,
      lastPage,
      hasNextPage: page < lastPage,
      hasPrevPage: page > 1,
      nextPage: page < lastPage ? page + 1 : null,
      prevPage: page > 1 ? page - 1 : null,
    };
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
