import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = () => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={css.container}>
        <header className={css.headerBox}>
          <NavLink className={css.headerLogo} to="/">
            Regulbe
          </NavLink>
          <ul className={css.headerLists}>
            <li>
              <NavLink
                className={css.headerLink}
                onClick={() => scrollToSection('about')}
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.headerLink}
                onClick={() => scrollToSection('services')}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="/services">
                EXPERTISE
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
                CLIENT PORTAL
              </NavLink>
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
