import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <header className={css.headerBox}>
          <NavLink className={css.headerLogo} to="/">
            Regulbe
          </NavLink>
          <ul className={css.headerLists}>
            <li>
              <NavLink className={css.headerLink} to="/about">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="/services">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="/geographies">
                GEOGRAPHIES
              </NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="/pricing">
                PRICING
              </NavLink>
            </li>
          </ul>
          <ul className={css.headerLists}>
            <li>
              <NavLink className={css.headerLinkPortal} to="/clientportal">
                Client Portal
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className={css.headerButton}
                to="/contactus"
              >
                Contact us →
              </button>
            </li>
          </ul>
        </header>
      </div>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
