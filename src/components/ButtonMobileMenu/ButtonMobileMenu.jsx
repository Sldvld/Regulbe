import sprite from '../../assets/sprite.svg';
import css from './ButtonMobileMenu.module.css';

const ButtonMobileMenu = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <button
      onClick={toggleMobileMenu}
      className={css.mobileMenuButton}
      type="button"
    >
      <svg className={css.xSvg} width="24" height="24">
        <use href={sprite + '#icon-menu'}></use>
      </svg>
    </button>
  );
};

export default ButtonMobileMenu;
