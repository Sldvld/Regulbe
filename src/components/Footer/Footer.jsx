import { NavLink } from 'react-router-dom';
import logo from '../../assets/white-logo-regulbe.svg';
import css from './Footer.module.css';
import sprite from '../../assets/sprite.svg';

const Footer = () => {
  return (
    <footer>
      <div className={css.footerWraper}>
        <NavLink className={css.footerLabel} to="/">
          <img src={logo} alt="Logo" className={css.logo} />
        </NavLink>
        <div className={css.footerBlocks}>
          <nav className={css.footerNav}>
            <ul className={css.navList}>
              <li>
                <NavLink className={css.navLink}>Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink className={css.navLink}>Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink className={css.navLink}>Careers</NavLink>
              </li>
            </ul>
          </nav>
          <p className={css.footerCopyright}> © Regulbe - Copyright 2023</p>
          <div className={css.svgBlock}>
            <NavLink
              className={css.socialLink}
              to="https://www.linkedin.com/company/regulbe-ka/"
            >
              <svg className={css.footerSvg}>
                <use href={sprite + '#linkedin'} />
              </svg>
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/company/regulbe-ka/"
              className={css.socialLink}
            >
              <svg className={css.footerSvg}>
                <use href={sprite + '#icon-fb'} />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
