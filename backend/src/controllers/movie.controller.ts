import { Request, Response } from "express";
import { MovieService } from "../services/movie.service";

export class MovieController {
  // static async list(req: Request, res: Response) {
  //   const movies = await MovieService.list();
  //   res.json(movies);
  // }

  static async list(req: Request, res: Response) {
    const { q, minDuration, maxDuration, startDate, endDate, page = 1, limit = 10 } = req.query;
    const result = await MovieService.list({
      q: q as string,
      minDuration: minDuration ? Number(minDuration) : undefined,
      maxDuration: maxDuration ? Number(maxDuration) : undefined,
      startDate: startDate as string,
      endDate: endDate as string,
      page: Number(page),
      limit: Number(limit),
    });
    res.json(result);
  }

  static async create(req: Request, res: Response) {
    const movie = await MovieService.create(req.body);
    res.status(201).json(movie);
  }

  static async getById(req: Request, res: Response) {
    const movie = await MovieService.getById(Number(req.params.id));
    if (!movie) return res.status(404).json({ message: "Not found" });
    res.json(movie);
  }

  static async update(req: Request, res: Response) {
    const movie = await MovieService.update(Number(req.params.id), req.body);
    res.json(movie);
  }

  static async remove(req: Request, res: Response) {
    await MovieService.remove(Number(req.params.id));
    res.status(204).send();
  }
}
