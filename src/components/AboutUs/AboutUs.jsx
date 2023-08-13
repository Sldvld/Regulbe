import css from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section>
      <div className={css.aboutSection} id="about">
        <img src="" alt="" />
        <h2>ABOUT US</h2>
        <p>
          Regulbe is a market access and regulatory intelligence service
          provider specializing in addressing regulatory compliance needs of
          voice-over internet protocol (VoIP) and cloud-based communications
          service providers around the world. Regulbe helps identify regulatory
          requirements for accessing and operating in different markets, obtain
          all necessary licenses and authorizations, and identify regulatory
          risks and opportunities throughout the telecommunications product
          lifecycle.
        </p>
        <p>
          Regulbe helps identify regulatory requirements for accessing and
          operating in different markets, obtain all necessary licenses and
          authorizations, and identify regulatory risks and opportunities
          throughout the telecommunications product lifecycle.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
