import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <div className="container">
        <header>
          <NavLink to="/">Regulbe</NavLink>
          <ul>
            <li>
              <NavLink>About us</NavLink>
            </li>
            <li>
              <NavLink>Services</NavLink>
            </li>
            <li>
              <NavLink>Geographies</NavLink>
            </li>
            <li>
              <NavLink>Pricing</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/clientportal">Client Portal</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact us</NavLink>
            </li>
          </ul>
        </header>
      </div>
      <main>
        <div className="container">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
