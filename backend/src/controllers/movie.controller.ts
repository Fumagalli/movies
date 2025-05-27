import { Request, Response } from "express";
import { MovieService } from "../services/movie.service";

export class MovieController {
  static async list(req: Request, res: Response): Promise<void> {
    const {
      q,
      minDuration,
      maxDuration,
      startDate,
      endDate,
      page = 1,
      limit = 10,
    } = req.query;
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
    return;
  }

  static async create(req: Request, res: Response): Promise<void> {
    const movie = await MovieService.create(req.body);
    res.status(201).json(movie);
    return;
  }

  static async getById(req: Request, res: Response): Promise<void> {
    const movie = await MovieService.getById(Number(req.params.id));
    if (!movie) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    res.json(movie);
    return;
  }

  static async update(req: Request, res: Response): Promise<void> {
    const movie = await MovieService.update(Number(req.params.id), req.body);
    res.json(movie);
    return;
  }

  static async remove(req: Request, res: Response): Promise<void> {
    await MovieService.remove(Number(req.params.id));
    res.status(204).send();
    return;
  }

  static async uploadImage(req: Request, res: Response): Promise<void> {
    const movieId = Number(req.params.id);
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }
    const imagePath = req.file.filename;
    const movie = await MovieService.update(movieId, { imagePath });
    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }
    res.json({ message: "Image uploaded", imagePath });
    return;
  }
}
