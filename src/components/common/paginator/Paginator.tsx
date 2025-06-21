import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import styles from './Paginator.module.css';
import type { PaginatorProps } from './paginator.props';

export const Paginator = (props: PaginatorProps) => {
  const {
    currentPage,
    totalPages,
    perPage,
    onPerPageChange,
    onPageChange
  } = props;

  return (
    <div className={ styles.paginator }>
      <div className={ styles.perPage }>
        <label htmlFor="per-page">Elements per page</label>
        <select
          id="per-page"
          value={ perPage }
          onChange={ (e) => onPerPageChange(Number(e.target.value)) }
        >
          {
            [5, 10, 20].map((n) => (
              <option key={ n } value={ n }>{ n }</option>
            ))
          }
        </select>
      </div>

      <div className={ styles.paginator_buttons }>
        <button
          className="empty-button button-icon"
          aria-label="Previous page"
          data-testid="previous-page"
          onClick={ () => onPageChange(currentPage - 1) }
          disabled={ currentPage === 1 }
        >
          <GrFormPrevious aria-hidden size={ 24 } />
        </button>

        <span>Page { currentPage } of { totalPages }</span>

        <button
          className="empty-button button-icon"
          aria-label="Next page"
          data-testid="next-page"
          onClick={ () => onPageChange(currentPage + 1) }
          disabled={ currentPage === totalPages }
        >
          <GrFormNext aria-hidden size={ 24 } />
        </button>
      </div>
    </div>
  );
};
