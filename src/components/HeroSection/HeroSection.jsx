import { NavLink } from 'react-router-dom';
import backgroundImg from '../../assets/bckg.jpg';
import css from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div
      className={css.bckg}
      style={{ backgroundImage: `url(${backgroundImg})` }}
      role="img"
      aria-label="Background Image"
    >
      <div className={css.container}>
        <div className={css.heroContainer}>
          <h1 className={css.heroText}>
            <span className={css.logoDecoration}>Regulbe </span>- regulatory
            compliance services for VoIP and cloud - based communications
            service providers
          </h1>
          <div>
            <NavLink className={css.contactUsButton} to="/contactus">
              Contact us →
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
