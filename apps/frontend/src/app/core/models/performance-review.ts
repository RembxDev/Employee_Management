export interface PerformanceReview {
  id: number;
  employeeId: number;
  reviewDate?: string;
  reviewer?: string;
  rating?: number;
  comments?: string;
}
