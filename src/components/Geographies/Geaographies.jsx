import map from '../../assets/map.jpg';
import arr from '../../assets/sprite.svg';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from './Geographies.module.css';

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <svg width="24" height="24" className={styles.arrowSvg}>
          <use href={arr + '#icon-arr-down'} />
        </svg>
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

const Geographies = () => {
  return (
    <div className={styles.geographiesSection} id="geographies">
      <div className={styles.geographiesWrapper}>
        <div className={styles.geographiesTextBlock}>
          <h2 className={styles.geographiesHeader}>GEOGRAPHIES</h2>
          <div className={styles.accordion}>
            <Accordion allowMultiple transition transitionTimeout={250}>
              <AccordionItem header="Asia - Pacific (11)">
                Australia <span className={styles.dotItem}>&#8226;</span> New
                Zeland <span className={styles.dotItem}>&#8226;</span> Hong Kong
                <span className={styles.dotItem}>&#8226;</span> India
                <span className={styles.dotItem}>&#8226;</span> Indinesia
                <span className={styles.dotItem}>&#8226;</span> Japan
                <span className={styles.dotItem}>&#8226;</span> Malaysia
                <span className={styles.dotItem}>&#8226;</span> Philippines
                <span className={styles.dotItem}>&#8226;</span> South Korea
                <span className={styles.dotItem}>&#8226;</span> Singapore
                <span className={styles.dotItem}>&#8226;</span> Thailand
              </AccordionItem>

              <AccordionItem header="Eastern Europe (9)">
                Czech Republic <span className={styles.dotItem}>&#8226;</span>
                Croatia <span className={styles.dotItem}>&#8226;</span> Hungary
                <span className={styles.dotItem}>&#8226;</span> Poland
                <span className={styles.dotItem}>&#8226;</span> Romania
                <span className={styles.dotItem}>&#8226;</span> Slovakia
                <span className={styles.dotItem}>&#8226;</span> Slovenia
                <span className={styles.dotItem}>&#8226;</span> Latvia
                <span className={styles.dotItem}>&#8226;</span> Lithuania
              </AccordionItem>

              <AccordionItem header="Western Europe (18)">
                Austria <span className={styles.dotItem}>&#8226;</span> Belgium{' '}
                <span className={styles.dotItem}>&#8226;</span> Denmark
                <span className={styles.dotItem}>&#8226;</span> Finland
                <span className={styles.dotItem}>&#8226;</span> France
                <span className={styles.dotItem}>&#8226;</span> Germany
                <span className={styles.dotItem}>&#8226;</span> Greece
                <span className={styles.dotItem}>&#8226;</span> Ireland
                <span className={styles.dotItem}>&#8226;</span> Italy
                <span className={styles.dotItem}>&#8226;</span> Luxembourg
                <span className={styles.dotItem}>&#8226;</span> Netherlands
                <span className={styles.dotItem}>&#8226;</span> Norway
                <span className={styles.dotItem}>&#8226;</span> Portugal
                <span className={styles.dotItem}>&#8226;</span> Spain
                <span className={styles.dotItem}>&#8226;</span> Sweden
                <span className={styles.dotItem}>&#8226;</span> Switzerland
                <span className={styles.dotItem}>&#8226;</span> Turkey
                <span className={styles.dotItem}>&#8226;</span> United Kingdom
              </AccordionItem>

              <AccordionItem header="Latin America (7)">
                Argentina <span className={styles.dotItem}>&#8226;</span>
                Brasil <span className={styles.dotItem}>&#8226;</span> Colombia
                <span className={styles.dotItem}>&#8226;</span> Chile
                <span className={styles.dotItem}>&#8226;</span> Dominican
                Republic
                <span className={styles.dotItem}>&#8226;</span> Mexico
                <span className={styles.dotItem}>&#8226;</span> Peru
              </AccordionItem>

              <AccordionItem header="North America (2)">
                Canada <span className={styles.dotItem}>&#8226;</span>
                United States
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <img
          className={styles.geographiesMap}
          loading="lazy"
          src={map}
          alt="Map"
        />
      </div>
    </div>
  );
};

export default Geographies;
