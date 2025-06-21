import '../../../../shared/css/skeleton.css';
import styles from './UserSkeleton.module.css';

export const UserSkeleton = () => {
  return (
    <article className="skeleton_card" aria-hidden="true">
      <div className={ `skeleton ${ styles.skeleton_title }` } />
      <div className={ `skeleton ${ styles.skeleton_text }` } />
      <div className={ `skeleton ${ styles.skeleton_text }` } />
      <div className={ `skeleton ${ styles.skeleton_text }` } />
    </article>
  );
};
