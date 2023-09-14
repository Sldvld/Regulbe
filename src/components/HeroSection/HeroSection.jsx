import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import backgroundImg from '../../assets/bckg.jpg';
import sprite from '../../assets/sprite.svg';

import css from './HeroSection.module.css';

const HeroSection = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div
        className={css.bckg}
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: '1920px auto',
        }}
        role="img"
        aria-label="Background Image"
      >
        <div className={css.container}>
          <div className={css.heroContainer}>
            <h1 className={css.heroText}>
              <span className={css.logoDecoration}>Regulbe </span> - regulatory
              compliance services for cloud communications
            </h1>
            <button
              onClick={() => setModalActive(true)}
              type="button"
              className={css.contactUsButton}
            >
              <span className={css.buttonText}>Contact us</span>
              <svg className={css.arrowSvg} width="16" height="12">
                <use href={sprite + '#icon-arrow'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={css.modalBlock}>
          <form className={css.modalForm}>
            <h2 className={css.formMainLabel}>Contact us</h2>
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
              <label htmlFor="name" className={css.formLabel}>
                Company
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                minLength="2"
                maxLength="20"
                placeholder="Enter your company name"
                className={css.formInput}
              />
            </div>
            <div className={css.modalInputBlock}>
              <label htmlFor="name" className={css.formLabel}>
                Corporate email address
              </label>
              <input
                type="mail"
                name="name"
                id="name"
                required
                minLength="4"
                maxLength="20"
                placeholder="Enter your corporate email address"
                className={css.formInput}
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

export default HeroSection;
