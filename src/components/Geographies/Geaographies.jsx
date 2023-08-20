import Map from '../../assets/map.svg';
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
          <use href={arr + '#arr-down'} />
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

const Acc = () => {
  return (
    <div className={styles.geographiesSection} id="geographies">
      <div className={styles.geographiesWrapper}>
        <div className={styles.geographiesTextBlock}>
          <h2 className={styles.geographiesHeader}>GEOGRAPHIES</h2>
          <div className={styles.accordion}>
            {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis deserunt fuga sunt architecto, itaque iste!
              </AccordionItem>

              <AccordionItem header="Western Europe (18)">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis deserunt fuga sunt architecto, itaque iste!
              </AccordionItem>

              <AccordionItem header="Latin America (7)">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis deserunt fuga sunt architecto, itaque iste!
              </AccordionItem>

              <AccordionItem header="North America (2)">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis deserunt fuga sunt architecto, itaque iste!
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <img className={styles.geographiesMap} src={Map} alt="Map" />
      </div>
    </div>
  );
};

export default Acc;
