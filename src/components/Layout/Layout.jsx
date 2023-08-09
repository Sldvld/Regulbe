import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.headerBox}>
        <div className="container">
          <div className={css.headerBlocks}>
            <NavLink className={css.headerLogo} to="/">
              Regulbe
            </NavLink>
            <ul className={css.headerLists}>
              <li>
                <NavLink className={css.headerLink}>About us</NavLink>
              </li>
              <li>
                <NavLink className={css.headerLink}>Services</NavLink>
              </li>
              <li>
                <NavLink className={css.headerLink}>Geographies</NavLink>
              </li>
              <li>
                <NavLink className={css.headerLink}>Pricing</NavLink>
              </li>
            </ul>
            <ul className={css.headerLists}>
              <li>
                <NavLink className={css.headerLink} to="/clientportal">
                  Client Portal
                </NavLink>
              </li>
              <li>
                <NavLink className={css.headerLinkContact} to="/contactus">
                  Contact us →
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
