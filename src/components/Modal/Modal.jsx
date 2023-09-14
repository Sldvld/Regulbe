import React from 'react';
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
