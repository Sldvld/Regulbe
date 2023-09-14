import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './Pricing.module.css';
import sprite from '../../assets/sprite.svg';

const Pricing = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className={css.pcicingSection} id="pricing">
        <div className={css.pricingWrapper}>
          <h2 className={css.pricingHeader}>PRICING</h2>
          <div className={css.pricingTextBlock}>
            <ul className={css.pricingList}>
              <li className={css.pricingItem}>
                At Regulbe, we believe in transparent and accessible pricing for
                our services. Prospective clients can always approach us to
                receive a personalized fee quote.
              </li>
              <li className={css.pricingItem}>
                We kindly request a brief description of your question or
                project, along with a list of countries for which you require
                information. All the requests remain confidential.
              </li>
            </ul>
            <ul className={css.pricingList}>
              <li className={css.pricingItem}>
                Our team of experts will diligently assess your needs and tailor
                a competitive pricing package to suit your requirements.
              </li>
              <li className={css.pricingItem}>
                Feel free to contact us today and let us assist you in
                navigating the complexities of global regulatory compliance
                information with ease.
              </li>
            </ul>
          </div>
          <button
            onClick={() => setModalActive(true)}
            className={css.feeButton}
            type="button"
          >
            Get a fee quote
            <svg className={css.arrowSvg} width="16" height="12">
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={css.modalBlock}>
          <form className={css.modalForm}>
            <h2 className={css.formMainLabel}>Get a fee quote</h2>
            <div className={css.modalInputBlock}>
              <label htmlFor="name" className={css.formLabel}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                minLength="4"
                maxLength="20"
                placeholder="Enter your full name"
                className={css.formInput}
              />
            </div>
            <div className={css.modalInputBlock}>
              <label htmlFor="company" className={css.formLabel}>
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                minLength="2"
                maxLength="20"
                placeholder="Enter your company name"
                className={css.formInput}
              />
            </div>
            <div className={css.modalInputBlock}>
              <label htmlFor="mail" className={css.formLabel}>
                Corporate email address
              </label>
              <input
                type="mail"
                name="mail"
                id="mail"
                required
                minLength="4"
                maxLength="20"
                placeholder="Enter your corporate email address"
                className={css.formInput}
              />
            </div>
            <div className={css.modalInputBlock}>
              <label htmlFor="request" className={css.formLabel}>
                Request
              </label>
              <textarea
                type="text"
                name="request"
                id="request"
                cols="30"
                rows="10"
                placeholder="Please provide a brief description of your question or project and indicate a list of countries for which your require information."
                className={css.formInputRequest}
              />
            </div>
            <div className={css.modalSupport}>
              <input
                className={css.modalCheckbox}
                type="checkbox"
                name="accept"
                value="accept"
                id="accept"
              />
              <label className={css.modalRemember} htmlFor="accept">
                I would like to be informed about Regulbe’s latest research and
                services
              </label>
            </div>
            <button type="submit" className={css.loginButton}>
              <span className={css.loginButtonText}>Send</span>
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Pricing;
