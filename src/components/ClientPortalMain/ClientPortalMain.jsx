// import { NavLink } from 'react-router-dom';
// import sprite from '../../assets/sprite.svg';
import css from './ClientPortalMain.module.css';

const ClientPortalMain = () => {
  return (
    <section>
      <div className={css.mainSection}>
        {/* <NavLink className={css.backButton}>
          <svg className={css.arrowSvg} width="16" height="12">
            <use href={sprite + '#icon-arrow'} />
          </svg>
          Back to search
        </NavLink> */}
        <h1 className={css.mainHeader}>NOMANDIC NUMBERS</h1>
        <p className={css.updateData}>
          <span className={css.updateTitle}>Last update: </span>August 10, 2023
        </p>
        <div className={css.descriptionBlock}>
          <p className={css.shortDescription}>Short description</p>
          <p className={css.showHide}>Show/Hide</p>
        </div>
        <table className={css.table}>
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
        <div className={css.disclaimerBlock}>
          <h2 className={css.disclaimerTitle}>DISCLAIMER:</h2>
          <p className={css.disclaimerText}>
            The information provided on this website does not, and is not
            intended to, constitute legal advice, instead, all information,
            content, and materials available on this site are for general
            information purposes only. Information on this website may not
            constitute the most up-to-date legal or other information. This
            website contains links to other third-party websites. Such links are
            only for the convenience of the reader, user or browser. Regulbe
            does not recommend or endorse the contents of the third-party
            websites.
          </p>
          <p className={css.disclaimerText}>
            Readers of this website shoule contact their attorney to obtain
            advice with respect to any particular legal matter. No reader, user,
            or browther of this site should act or refrain from acting on the
            basis of information on this website without first seeking legal
            advice from counsel in the relevant jurisdiction.Only your
            individual attorney can provide assurances that the information
            contained herein - and your interpretation of it - is applicable or
            appropriate to your particular situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalMain;
