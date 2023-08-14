import { NavLink } from 'react-router-dom';
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
          Contact us →
        </NavLink>
      </div>
    </div>
  );
};

export default Questions;
