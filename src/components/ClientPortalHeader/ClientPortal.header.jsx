import { NavLink } from 'react-router-dom';
import css from './ClientportalHeader.module.css';

const ClienPortalHeader = () => {
  return (
    <header className={css.clienPortalHeader}>
      <div className={css.headerContainer}>
        <p className={css.headerTitle}>CLIENT PORTAL</p>
        <NavLink to="/" className={css.logout}>LOG OUT</NavLink>
      </div>
    </header>
  );
};

export default ClienPortalHeader;
