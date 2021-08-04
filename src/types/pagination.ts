export interface PaginatedData<T> {
  data: T
  page: number
  totalResults: number
  totalPages: number
}
