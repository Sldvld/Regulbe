import React from 'react';
import css from './AboutUs.module.css';
import workingProcessImage from '../../assets/working-process.jpg';

const AboutUs = () => {
  return (
    <section>
      <div className={css.aboutSection} id="about">
        <div>
          <img
            className={css.aboutImage}
            src={workingProcessImage}
            alt="Working process"
            loading="lazy"
          />
        </div>
        <div className={css.aboutTextBlock}>
          <h2 className={css.aboutHeader}>ABOUT US</h2>
          <p className={css.aboutText}>
            Regulbe is a market access and regulatory intelligence service
            provider specializing in addressing regulatory compliance needs of
            cloud-based communications service providers around the world.
          </p>
          <p className={css.aboutTextHelps}>
            Regulbe helps identify regulatory requirements for accessing and
            operating in different markets, obtain all necessary licenses and
            authorizations, and identify regulatory risks and opportunities
            throughout the product lifecycle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
