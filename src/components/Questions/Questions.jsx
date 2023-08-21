import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './Questions.module.css';

const Questions = () => {
  return (
    <div className={css.questionsSection}>
      <div className={css.questionsWrapper}>
        <div className={css.questionsTextBlock}>
          <p className={css.questionsText}>Do you have a question?</p>
          <p className={css.questionsText}> Let's talk!</p>
        </div>
        <NavLink className={css.contactUsButton} to="/contactus">
          Contact us
          <svg className={css.arrowSvg} width="16" height="12">
            <use href={sprite + '#icon-arrow'} />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Questions;
