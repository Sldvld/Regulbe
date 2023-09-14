import React from 'react';
import sprite from '../../assets/sprite.svg';
import css from './Modal.module.css';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={`${css.modal} ${active ? css.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${css.modalContent} ${active ? css.active : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          className={css.modalCloseButton}
          onClick={() => setActive(false)}
          type="button"
        >
          <svg className={css.xSvg} width="16" height="16">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
