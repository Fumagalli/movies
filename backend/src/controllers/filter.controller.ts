import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities/movie.entity";

export class FilterController {
  static async list(req: Request, res: Response): Promise<void> {
    // Busca valores mínimos e máximos do banco para ajudar o frontend
    const repo = AppDataSource.getRepository(Movie);

    const [minDuration] = await repo.createQueryBuilder("movie").select("MIN(movie.duration)", "min").getRawMany();
    const [maxDuration] = await repo.createQueryBuilder("movie").select("MAX(movie.duration)", "max").getRawMany();
    const [minBudget] = await repo.createQueryBuilder("movie").select("MIN(movie.budget)", "min").getRawMany();
    const [maxBudget] = await repo.createQueryBuilder("movie").select("MAX(movie.budget)", "max").getRawMany();
    const [minDate] = await repo.createQueryBuilder("movie").select("MIN(movie.releaseDate)", "min").getRawMany();
    const [maxDate] = await repo.createQueryBuilder("movie").select("MAX(movie.releaseDate)", "max").getRawMany();

    res.json({
      filters: [
        { name: "duration", type: "range", min: Number(minDuration.min), max: Number(maxDuration.max) },
        { name: "releaseDate", type: "date-range", min: minDate.min, max: maxDate.max },
        { name: "budget", type: "range", min: Number(minBudget.min), max: Number(maxBudget.max) },
        { name: "q", type: "text" }
      ]
    });
  }
}
