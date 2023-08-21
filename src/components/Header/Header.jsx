import { NavLink, useLocation } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
import logo from '../../assets/logo-regulbe.svg';
import css from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const shouldShowNavigation = location.pathname !== '/termsandconditions';

  return (
    <>
      <div className={css.container}>
        <header className={css.headerBox}>
          <NavLink className={css.headerLogo} to="/">
            <img src={logo} alt="Logo" className={css.logo} />
          </NavLink>
          {shouldShowNavigation && <MainNavigation />}
          <ul className={css.headerLists}>
            <li className={css.clientPortalBlock}>
              <NavLink className={css.headerLinkPortal} to="/clientportal">
                CLIENT PORTAL
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
