import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import logo from '../../assets/logo-regulbe.svg';
import sprite from '../../assets/sprite.svg';
import css from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const shouldShowNavigation =
    location.pathname !== '/termsandconditions' &&
    location.pathname !== '/privacypolicy' &&
    location.pathname !== '/careers';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className={css.mobilePreHeader}></div>
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
          <button
            onClick={toggleMobileMenu}
            className={css.mobileMenuButton}
            type="button"
          >
            <svg className={css.xSvg} width="24" height="24">
              <use href={sprite + '#icon-menu'}></use>
            </svg>
          </button>
        </header>
      </div>
      {isMobileMenuOpen && (
        <div className={css.mobileMenu}>
          <ul className={css.headerList}>
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
              <NavLink
                className={css.headerLink}
                onClick={() => scrollToSection('expertise')}
              >
                EXPERTISE
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.headerLink}
                onClick={() => scrollToSection('geographies')}
              >
                GEOGRAPHIES
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.headerLink}
                onClick={() => scrollToSection('pricing')}
              >
                PRICING
              </NavLink>
            </li>
          </ul>

          <button
            className={css.mobileCloseMenuButton}
            onClick={toggleMobileMenu}
            type="button"
          >
            <svg className={css.xSvg} width="16" height="16">
              <use href={sprite + '#icon-close'}></use>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
