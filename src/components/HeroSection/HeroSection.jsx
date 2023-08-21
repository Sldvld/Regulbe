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
            compliance services for cloud communications
          </h1>

          <button type="button" className={css.contactUsButton} to="/contactus">
            <span className={css.buttonText}>Contact us</span>
            <svg className={css.arrowSvg} width="16" height="12">
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
// const HeroSection = () => {
//   return (
//     <div className="vodeoContainer">
//       <video autoPlay muted preload="auto" width="100%" height="720">
//         <source type="video/mp4" src={video} />
//       </video>
//     </div>
//   );
// };

export default HeroSection;
