import css from './Geographies.module.css';
import Map from '../../assets/map.svg';

const Geographies = () => {
  return (
    <div className={css.geographiesSection} id="geographies">
      <div className={css.geographiesWrapper}>
        <div className={css.geographiesTextBlock}>
          <h2 className={css.geographiesHeader}>GEOGRAPHIES</h2>
          <p className={css.geographiesLocation}>Asia - Pacific (11)</p>
          <p className={css.geographiesLocation}>Eastern Europe (9)</p>
          <p className={css.geographiesLocation}>Western Europe (18)</p>
          <p className={css.geographiesLocation}>Latin America (7)</p>
          <p className={css.geographiesLocation}>North America (2)</p>
        </div>
        <img className={css.geographiesMap} src={Map} alt="" />
      </div>
    </div>
  );
};

export default Geographies;
