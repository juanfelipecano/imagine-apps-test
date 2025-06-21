export interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  perPage: number;
  onPerPageChange: (value: number) => void;
  onPageChange: (page: number) => void;
}
