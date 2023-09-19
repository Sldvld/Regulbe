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

export default Questions;
