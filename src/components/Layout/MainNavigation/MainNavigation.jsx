import { NavLink } from 'react-router-dom';
import css from '../Layout.module.css';

const MainNavigation = () => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
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
    </>
  );
};

export default MainNavigation;
