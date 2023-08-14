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
          />
        </div>
        <div className={css.aboutTextBlock}>
          <h2 className={css.aboutHeader}>ABOUT US</h2>
          <p className={css.aboutText}>
            Regulbe is a market access and regulatory intelligence service
            provider specializing in addressing regulatory compliance needs of
            voice-over internet protocol (VoIP) and cloud-based communications
            service providers around the world. Regulbe helps identify
            regulatory requirements for accessing and operating in different
            markets, obtain all necessary licenses and authorizations, and
            identify regulatory risks and opportunities throughout the
            telecommunications product lifecycle.
          </p>
          <p className={css.aboutTextHelps}>
            Regulbe helps identify regulatory requirements for accessing and
            operating in different markets, obtain all necessary licenses and
            authorizations, and identify regulatory risks and opportunities
            throughout the telecommunications product lifecycle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
