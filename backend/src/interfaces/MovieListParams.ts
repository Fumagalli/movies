export interface MovieListParams {
  q?: string;
  minDuration?: number;
  maxDuration?: number;
  startDate?: string;
  endDate?: string;
  minBudget?: number;
  maxBudget?: number;
  page?: number;
  limit?: number;
}
