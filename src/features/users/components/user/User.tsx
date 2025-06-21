import styles from './User.module.css';
import type { UserProps } from './user.props';

export const User = (props: UserProps) => {
  const { id, fullname, email, isActive, courses} = props;

  return (
    <article className={ styles.user_card } aria-labelledby={ `user-${ id }` }>
      <h3 id={ `user-${ id }` }>{ fullname }</h3>
      <p><strong>Email:</strong> { email }</p>
      <p><strong>Status:</strong> { isActive ? 'Active' : 'Inactive' }</p>

      <details>
        <summary>Courses ({ courses.length })</summary>
        <ul>
          {
            courses.map((course) => (
              <li key={ course.id }>
                <strong>{ course.title }</strong> - { course.instructor }
              </li>
            ))
          }
        </ul>
      </details>
    </article>
  );
};
