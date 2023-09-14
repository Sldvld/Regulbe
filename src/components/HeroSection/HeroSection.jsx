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
            <h2 className={css.formMainLabel}>Sign in</h2>
            <h3 className={css.formSecondaryLabel}>
              Sign in with your username and password
            </h3>
            <div className={css.modalInputBlock}>
              <label htmlFor="name" className={css.formLabel}>
                Your username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                minLength="4"
                maxLength="20"
                placeholder="Enter username"
                className={css.formInput}
              />
            </div>
            <div className={css.modalInputBlock}>
              <label htmlFor="name" className={css.formLabel}>
                Your password
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                minLength="4"
                maxLength="20"
                placeholder="Enter password"
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
                Remember me
              </label>
              <a
                href="mailto: info@regulbe.com"
                className={css.modalForgotPass}
              >
                Forgot password?
              </a>
            </div>
            <button type="submit" className={css.loginButton}>
              <span className={css.loginButtonText}>Log in</span>
            </button>
            <p className={css.notClient}>
              Not a client?
              <a href="mailto: info@regulbe.com" className={css.notClientSend}>
                Contact us
              </a>
            </p>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default HeroSection;
