// import backgroundImg from '../../assets/bckg.jpg';
// import sprite from '../../assets/sprite.svg';
import css from './HeroSection.module.css';
import video from '../../assets/video.mp4';
import { useRef, useState } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };
  return (
    <div className={css.videoContainer}>
      <video
        ref={videoRef}
        src={video}
        className={`${css.videoElement} ${videoEnded ? css.videoEnded : ''}`}
        autoPlay
        muted
        onEnded={handleVideoEnded}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
// <div
//   className={css.bckg}
//   style={{ backgroundImage: `url(${backgroundImg})` }}
//   role="img"
//   aria-label="Background Image"
// >
//   <div className={css.container}>
//     <div className={css.heroContainer}>
//       <h1 className={css.heroText}>
//         <span className={css.logoDecoration}>Regulbe </span> - regulatory
//         compliance services for cloud communications
//       </h1>

//       <button type="button" className={css.contactUsButton} to="/contactus">
//         <span className={css.buttonText}>Contact us</span>
//         <svg className={css.arrowSvg}>
//           <use href={sprite + '#icon-arrow'} />
//         </svg>
//       </button>
//     </div>
//   </div>
// </div>

export default HeroSection;
