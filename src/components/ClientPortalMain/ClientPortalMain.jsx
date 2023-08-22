import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import css from './ClientPortalMain.module.css';

const ClientPortalMain = () => {
  return (
    <section>
      <div className={css.mainSection}>
        <NavLink className={css.backButton}>
          <svg className={css.arrowSvg} width="16" height="12">
            <use href={sprite + '#icon-arrow'} />
          </svg>
          Back to search
        </NavLink>
        <h1 className={css.mainHeader}>NOMANDIC NUMBERS</h1>
        <p className={css.updateData}>
          <span className={css.updateTitle}>Last update: </span>August 10, 2023
        </p>
        <div className={css.descriptionBlock}>
          <p className={css.shortDescription}>Short description</p>
          <p className={css.showHide}>Show/Hide</p>
        </div>
        <table className={css.customTable}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Info 1</th>
              <th>Info 2</th>
              <th>Info 3</th>
              <th>Info 4</th>
              <th>Info 5</th>
              <th>Info 6</th>
              <th>Info 7</th>
              <th>Info 8</th>
              <th>Info 9</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 11 }).map((_, country) => (
              <tr key={country}>
                <td>Counry {country + 1}</td>
                <td>Value 1</td>
                <td>Value 2</td>
                <td>Value 3</td>
                <td>Value 4</td>
                <td>Value 5</td>
                <td>Value 6</td>
                <td>Value 7</td>
                <td>Value 8</td>
                <td>Value 9</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClientPortalMain;
