import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './TermsAndConditions.module.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={css.mobilePreHeader}></div>
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
            <p className={css.termsTitle}>Terms & Conditions</p>
          </div>
          <h1 className={css.termsHeader}>Terms & Conditions</h1>
          <div className={css.updaterBlock}>
            <p className={css.updaterData}>
              <span className={css.updaterText}>Last update: </span>August 10,
              2023
            </p>
          </div>

          <p className={css.termsText}>
            Thank you for visiting our website. Use of this website is subject
            to the user's compliance with these Terms and Conditions. As such,
            please carefully review the following information and do not use our
            website if you are not willing to abide by these Terms and
            Conditions.
          </p>
          <h2 className={css.secondaryHeaders}>General Use</h2>
          <p className={css.termsText}>
            Using our website does not create a contract between you and
            Regulbe.
          </p>
          <p className={css.termsText}>
            The information provided on this website does not, and is not
            intended to, constitute legal advice, instead, all information,
            content (including databases), and materials (“Information”)
            available on this site are for the general information purposes
            only. It is subject to change without notice.
          </p>
          <p className={css.termsText}>
            Regulbe collects and analyses publicly available information
            applicable to the provision of telecommunications services across
            countries. Regulbe leverages its industry expertise to compose
            databases with information related to regulatory requirements
            grouped by different jurisdictions and/or topics.
          </p>
          <p className={css.termsText}>
            Regulbe exercises reasonable diligence to ensure that the
            Information provided is both accurate and punctual. However,
            Regulbe, as well as any third parties, do not offer any assurance or
            warranty regarding the precision, timeliness, effectiveness,
            entirety, or appropriateness of the Information presented or
            provided on this website for any specific intent.
          </p>
          <p className={css.termsText}>
            Readers, users, and/or browsers of this website should only regard
            the Information available via the{' '}
            <a className={css.termsAccent} href="/regulbe/clientportal">
              Client Portal{' '}
            </a>
            as an exclusive, non-mandatory, and non-binding point of view of
            Regulbe regarding the regulation of specific aspects of
            telecommunications services within specific jurisdictions.
          </p>
          <p className={css.termsText}>
            You recognize that such information and materials could include
            inaccuracies or mistakes, and we explicitly disclaim responsibility
            for any such inaccuracies or errors to the maximum extent allowed by
            law.
          </p>
          <p className={css.termsText}>
            Readers, users and/or browsers of this website must contact a
            qualified attorney, lawyer, and/or counsel (“Qualified Counsel”) in
            a specific jurisdiction to obtain advice with respect to any
            particular legal, regulatory or factual matter. No reader, user, or
            browser of this website should act or refrain from acting on the
            basis of the Information on this website without first seeking legal
            advice from the Qualified Counsel in the relevant jurisdiction. Only
            the Qualified Counsel can provide assurances that the Information on
            this website - and your interpretation of it - is applicable and/or
            appropriate to your particular situation.
          </p>
          <p className={css.termsText}>
            The utilization of any Information from this website is entirely
            your responsibility and at your own risk. We are not accountable for
            it. Ensuring that any products, services, or information accessed
            through this website fulfill your particular requirements remains
            solely under your own responsibility.
          </p>
          <h2 className={css.secondaryHeaders}>Links to Other Websites</h2>
          <p className={css.termsText}>
            This website contains links to other third-party websites. Such
            links are only provided for convenience of the reader, user or
            browser. Regulbe does not recommend or endorse any third-party
            websites or services. We have no control over, and assume no
            responsibility for, the content, privacy policies, or practices of
            any third-party websites or services. As such, we are not
            responsible or liable for any damage or loss you may incur as a
            result of using any third-party websites or services.
          </p>
          <h2 className={css.secondaryHeaders}>Confidentiality</h2>
          <p className={css.termsText}>
            The content of our website, including the Regulbe logo and the
            Information, is the property of Regulbe. Unless we give you express
            written permission, readers, users and/or browsers of this website
            may not copy, reproduce, distribute, transmit, publish, display,
            license, transfer, sell, or otherwise exploit information or images
            from the website.
          </p>
          <p className={css.termsText}>
            Readers, users and/or browsers of this website also agree not to use
            the website for any unlawful purposes or in any manner that disrupts
            the use of the website by other users.
          </p>
          <h2 className={css.secondaryHeaders}>Privacy</h2>
          <p className={css.termsText}>
            When you access the website, we may collect certain information from
            or about you. For details about the type of information we may
            collect, and the measures we use to protect your privacy, please
            visit our Privacy Policy.
          </p>
          <h2 className={css.secondaryHeaders}>Disclaimer</h2>
          <p className={css.termsText}>
            UNLESS OTHERWISE EXPLICITLY STATED IN THESE TERMS AND CONDITIONS OR
            ANY WRITTEN AGREEMENT REGULBE FORM WITH YOU, OUR WEBSITE IS
            PRESENTED "AS IS," AND WE DO NOT PROVIDE ANY FORM OF WARRANTIES,
            WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING ANY WARRANTIES OF
            MERCHANTABILITY, SUITABILITY FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. FURTHERMORE, ANY MENTION OF THIRD-PARTY
            INFORMATION, PRODUCTS, OR SERVICES ON THIS WEBSITE OR LINKED
            WEBSITES DOES NOT REPRESENT A CLEAR OR IMPLIED WARRANTY FROM REGULBE
            REGARDING SUCH INFORMATION, PRODUCTS, OR SERVICES. IF YOU DISAGREE
            WITH THESE TERMS AND CONDITIONS, YOUR ONLY RECOURSE IS TO CEASE
            USING OUR WEBSITE.
          </p>
          <h2 className={css.secondaryHeaders}>
            Governing Law and Jurisdiction
          </h2>
          <p className={css.termsText}>
            These Terms and Conditions are subject to the laws of Belgium and
            should be interpreted in accordance with them, disregarding any
            conflicts of law principles. In case of a dispute, it shall be
            subject to the exclusive jurisdiction of Brussels.
          </p>
          <h2 className={css.secondaryHeaders}>Questions</h2>
          <p className={css.termsText}>
            If you have any questions about these Terms and Conditions, please
            contact us at{' '}
            <a href="mailto: info@regulbe.com" className={css.termsAccent}>
              {' '}
              info@regulbe.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
