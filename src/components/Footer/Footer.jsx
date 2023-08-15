import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';
import sprite from '../../assets/sprite.svg';

const Footer = () => {
  return (
    <footer>
      <div className={css.footerWraper}>
        <NavLink className={css.footerLabel} to="/">
          Regulbe
        </NavLink>
        <div className={css.footerBlocks}>
          <nav className={css.footerNav}>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <p>Terms & Conditions</p>
              </li>
              <li className={css.navItem}>
                <p>Privacy Policy</p>
              </li>
              <li className={css.navItem}>
                <p>Careers</p>
              </li>
            </ul>
          </nav>
          <p className={css.footerCopyright}> © Regulbe - Copyright 2023</p>
          <div className={css.svgBlock}>
            <NavLink to="https://www.linkedin.com/company/regulbe-ka/">
              <svg className={css.footerSvg}>
                <use href={sprite + '#linkedin'} />
              </svg>
            </NavLink>
            {/* <svg className={css.footerSvg}>
              <use href={sprite + '#fb'} />
            </svg> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
