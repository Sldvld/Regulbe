import backgroundImg from '../../assets/bckg.jpg';
import sprite from '../../assets/sprite.svg';
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
            <span className={css.logoDecoration}>Regulbe </span> - regulatory
            compliance services for cloud - based communications service
            providers
          </h1>

          <button type="button" className={css.contactUsButton} to="/contactus">
            <span className={css.buttonText}>Contact us</span>
            <svg className={css.arrowSvg}>
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
