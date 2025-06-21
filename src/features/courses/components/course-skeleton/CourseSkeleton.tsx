import '../../../../shared/css/skeleton.css';
import styles from './CourseSkeleton.module.css';

export const CourseSkeleton = () => (
  <article className="skeleton_card" aria-hidden={ true }>
    <div className={ `skeleton ${ styles.title }` } />
    <div className={ `skeleton ${ styles.description }` } />
    <div className={ `skeleton ${ styles.meta }` } />
    <div className={ `skeleton ${ styles.meta }` } />
  </article>
);
