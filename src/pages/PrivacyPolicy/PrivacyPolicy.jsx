import Header from 'components/Header/Header';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
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
            <p className={css.termsTitle}>Privacy Policy</p>
          </div>
          <h1 className={css.termsHeader}>Privacy Policy</h1>
          <div className={css.updaterBlock}>
            <p className={css.updaterData}>
              <span className={css.updaterText}>Last update: </span>11 August,
              2023
            </p>
          </div>
          <h2 className={css.secondaryHeaders}>Introduction:</h2>
          <p className={css.termsText}>
            This Privacy Policy outlines how we collect, use, disclose, and
            protect your personal information when you interact with our website
            and services. We respect your privacy and are committed to ensuring
            that your personal data is handled in accordance with applicable
            data protection laws, including the General Data Protection
            Regulation (GDPR) in the European Union.
          </p>
          <h2 className={css.secondaryHeaders}>Information We Collect:</h2>
          <ul className={css.policyNumbering}>
            <li className={css.termsTextList}>
              <span className={css.termsAccent}>Cookies: </span>
              We use cookies to analyze how visitors use our website, to improve
              user experience, and to optimize our services. These cookies may
              collect non-personal information such as browser type, device
              information, and pages viewed. You can manage cookie preferences
              through your browser settings.
            </li>
            <li className={css.termsTextList}>
              <span className={css.termsAccent}>Recruitment Data: </span>
              When you apply for a position with us, we may collect personal
              data such as your name, contact details, resume, and other
              information relevant to the recruitment process. This data will
              only be collected during the opening of specific positions, and
              erased when is no longer required (e.g., the opening has been
              closed).
            </li>
            <li className={css.termsTextList}>
              <span className={css.termsAccent}>User Information: </span>
              We may collect your full name, corporate email address, location,
              and the name of your company when you use our website or services
              to provide you with relevant content and improve our offerings.
            </li>
          </ul>
          <h2 className={css.secondaryHeaders}>How We Use Your Information:</h2>
          <ul className={css.policyNumbering}>
            <li className={css.termsTextList}>
              We use cookies to analyze and enhance user experience on our
              website.
            </li>
            <li className={css.termsTextList}>
              Recruitment data is collected to assess your qualifications for
              open positions and communicate with you during the recruitment
              process.
            </li>
            <li className={css.termsTextList}>
              User information is collected to provide access to the{' '}
              <a className={css.termsAccent} href="/regulbe/clientportal">
                Client Portal{' '}
              </a>
              , personalize content, improve our services, and communicate
              relevant updates.
            </li>
          </ul>
          <h2 className={css.secondaryHeaders}>Disclosure of Information:</h2>
          <ul className={css.policyNumbering}>
            <li className={css.termsTextList}>
              We may share recruitment data with relevant personnel involved in
              the recruitment process.
            </li>
            <li className={css.termsTextList}>
              We do not sell, trade, or rent your personal information to third
              parties.
            </li>
            <li className={css.termsTextList}>
              We may disclose information when required by law or to protect our
              rights, safety, and property.
            </li>
          </ul>
          <h2 className={css.secondaryHeaders}>Data Security:</h2>
          <p className={css.termsText}>
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, disclosure,
            alteration, or destruction.
          </p>
          <h2 className={css.secondaryHeaders}>Your Rights:</h2>
          <ul className={css.policyNumbering}>
            <li className={css.termsTextList}>
              You have the right to access, correct, or delete your personal
              data.
            </li>
            <li className={css.termsTextList}>
              You can withdraw your consent to data processing at any time,
              where applicable.
            </li>
          </ul>
          <h2 className={css.secondaryHeaders}>Contact Us:</h2>
          <p className={css.termsText}>
            For questions, requests, or concerns regarding your privacy and data
            protection, please contact us at{' '}
            <a href="mailto: info@regulbe.com" className={css.termsAccent}>
              {' '}
              info@regulbe.com
            </a>
          </p>
          <h2 className={css.secondaryHeaders}>Updates to Privacy Policy:</h2>
          <p className={css.termsText}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. The updated version
            will be posted on our website.
          </p>
          <h2 className={css.secondaryHeaders}>Conclusion:</h2>
          <p className={css.termsText}>
            By using our website and services, you consent to the practices
            described in this Privacy Policy. We encourage you to review this
            policy periodically to stay informed about how we collect, use, and
            protect your personal information.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
