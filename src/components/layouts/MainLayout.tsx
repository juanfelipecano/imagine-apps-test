import { useState } from 'react';
import styles from './MainLayout.module.css';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';
import { useStorage } from '../../hooks';
import { ApplicationData } from '../../config';

export const MainLayout = () => {
  const navigate = useNavigate();
  const { removeItem } = useStorage();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogOut = async () => {
    await removeItem(ApplicationData.user);
    navigate('/login', { replace: true });
  }

  return (
    <div className={ styles.layout }>
      <header className={ styles.header }>
        <div className={ styles.header_inner }>
          <button className={ styles.menu_button } onClick={ toggleMenu } aria-label="Toggle menu">
            { menuOpen ? <IoMdClose size={ 24 } /> : <IoMenuOutline size={ 24 } /> }
          </button>
          <h1 className={ styles.logo }>Imagine Apps Test</h1>
        </div>

        <button className={ styles.menu_button } onClick={ handleLogOut } aria-label="Log out">
          <LuLogOut  size={ 24 } />
        </button>
      </header>

      <div className={ styles.container }>
        <aside className={ `${ styles.sidebar } ${ menuOpen ? styles.open : '' }` }>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/home/dashboard"
                  end
                  className={ ({ isActive }) => isActive ? styles.active : '' }
                  onClick={ closeMenu }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/courses"
                  className={ ({ isActive }) => isActive ? styles.active : '' }
                  onClick={ closeMenu }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/home/users"
                  className={ ({ isActive }) => isActive ? styles.active : '' }
                  onClick={ closeMenu }
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        {
          menuOpen && <div className={ styles.backdrop } onClick={ closeMenu } aria-hidden={ true } />
        }

        <main className={ styles.content }>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
