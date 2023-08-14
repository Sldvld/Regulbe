import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={css.footerWraper}>
        <NavLink className={css.footerLabel} to="/">
          Regulbe
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
