import { useEffect, useState } from 'react';
import '../../../../shared/css/forms.css';
import type { UserEntity } from '../../entities/user.entity';
import { useUsers } from '../../hooks/useUsers';
import { UserSkeleton } from '../user-skeleton/UserSkeleton';
import { User } from '../user/User';
import styles from './Users.module.css';

const Skeleton = () => (
  <ul>
    {
      Array.from({ length: 6 }).map((_, i) => (
        <li key={ `` + i }>
          <UserSkeleton />
        </li>
      ))
    }
  </ul>
);

export const Users = () => {
  const { getUsers } = useUsers();
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch {
        setError('Failed to load users.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const value = search.toLowerCase();
    return (
      user.fullname.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    );
  });

  if (error) return <p className="form-error">{error}</p>;

  return (
    <section className={ styles.users }>
      <h1>Registered Users</h1>

      <div className={ `form-group ${ styles.search_container }` }>
        <label htmlFor="search-users" className="visually-hidden">Search users</label>
        <input
          id="search-users"
          type="text"
          placeholder="Search by name or email"
          value={ search }
          onChange={ handleSearchChange }
          className={ styles.searchInput }
        />
      </div>

      {
        isLoading && (
          <Skeleton />
        )
      }

      <ul>
        {
          !isLoading && filteredUsers.length === 0 ? (
            <p>No users found.</p>
          ) : (
            filteredUsers.map(user => (
              <li key={ user.id } tabIndex={ 0 }>
                <User { ...user } />
              </li>
            ))
          )
        }
      </ul>
    </section>
  );
};
