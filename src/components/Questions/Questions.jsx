import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import sprite from '../../assets/sprite.svg';
import css from './Questions.module.css';

const Questions = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className={css.questionsSection}>
        <div className={css.questionsWrapper}>
          <div className={css.questionsTextBlock}>
            <p className={css.questionsText}>Do you have a question?</p>
            <p className={css.questionsText}> Let's talk!</p>
          </div>
          <NavLink
            className={css.contactUsButton}
            onClick={() => setModalActive(true)}
          >
            Contact us
            <svg className={css.arrowSvg} width="16" height="12">
              <use href={sprite + '#icon-arrow'} />
            </svg>
          </NavLink>
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

export default Questions;
