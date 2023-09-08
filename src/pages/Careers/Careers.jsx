import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './Careers.module.css';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className={css.termsSection}>
        <div className={css.termsWrapper}>
          <div className={css.termsNavigate}>
            <NavLink className={css.termsHomeLink} to="/">
              Home
            </NavLink>
            <svg className={css.dotSvg} width="4" height="4">
              <use href={sprite + '#icon-dot-gradient'} />
            </svg>
            <p className={css.termsTitle}>Careers</p>
          </div>
          <h1 className={css.termsHeader}>Careers</h1>
          <div className={css.updaterBlock}>
            <p className={css.updaterData}>
              <span className={css.updaterText}>Last update: </span>15
              September, 2023
            </p>
          </div>
          <h2 className={css.secondaryHeaders}>
            Join Our Team: Where Talent Thrives
          </h2>
          <p className={css.termsText}>
            At Regulbe, we believe that success is built upon the foundation of
            exceptional talent. We are committed to nurturing a culture of
            continuous growth and innovation, and we're always on the lookout
            for exceptional individuals to join our team.
          </p>
          <h2 className={css.secondaryHeaders}>Why Regulbe?</h2>
          <p className={css.termsText}>
            <span className={css.termsAccent}>A Culture of Excellence: </span>
            We pride ourselves on fostering a collaborative and inclusive work
            environment that encourages creativity, learning, and professional
            development. Our team members are empowered to take ownership of
            their work, and we believe in celebrating the diverse strengths and
            perspectives that each individual brings.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Cutting-Edge Innovation: </span>
            Joining our team means being part of a journey that constantly
            pushes the boundaries of what's possible. We believe that your
            contributions will shape the future of cloud communications.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Impactful Work: </span>
            At Regulbe, every project and initiative you work on will make a
            real difference. We tackle meaningful challenges and strive to
            create solutions that positively impact our clients and the
            communities we serve.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Professional Growth: </span>
            We are committed to investing in your growth and development. From
            mentorship programs to ongoing training, we provide the resources
            you need to excel in your career and achieve your ambitions.
          </p>
          <p className={css.termsText}>
            <span className={css.termsAccent}>Joining a Family: </span>
            When you join Regulbe, you become part of a close-knit family that
            values collaboration, mutual support, and a shared vision. We
            celebrate our successes together and navigate challenges as a
            unified team.
          </p>
          <h2 className={css.secondaryHeaders}>Vacancies: </h2>
          <h3 className={css.secondaryHeaders}>
            Junior Regulatory Analyst - Cloud Communications/ Telecommunications
            (Remote)
          </h3>
          <h3 className={css.secondaryHeaders}>
            Regulatory Compliance Manager - Cloud Communications (Remote)
          </h3>
        </div>
      </div>
    </>
  );
};

export default Careers;
