import type { CourseProps } from './course.props';
import styles from './Course.module.css';
import { GrFormEdit } from 'react-icons/gr';

export const Course = (props: CourseProps) => {
  const { title, description, duration, instructor, onEdit } = props;

  return (
    <article className={ styles.card } aria-label={ `Course: ${ title }` }>
      <header>
        <h2 className={ styles.title }>{ title }</h2>

        <div className={ styles.actions }>
          <button
            className="empty-button button-icon"
            aria-label="Edit Course"
            onClick={ onEdit }
          >
            <GrFormEdit aria-hidden size={ 24 } />
          </button>
        </div>
      </header>
      <p className={ styles.description }>{ description }</p>
      <p className={ styles.meta }>Duration: { duration } { duration > 1 ? 'weeks' : 'week' }</p>
      <p className={ styles.meta }>Instructor: { instructor }</p>
    </article>
  );
};
