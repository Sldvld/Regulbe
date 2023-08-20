import css from './Geographies.module.css';
import Map from '../../assets/map.svg';

// const Geographies = () => {
//   return (
//     <div className={css.geographiesSection} id="geographies">
//       <div className={css.geographiesWrapper}>
//         <div className={css.geographiesTextBlock}>
//           <h2 className={css.geographiesHeader}>GEOGRAPHIES</h2>
//           <p className={css.geographiesLocation}>Asia - Pacific (11)</p>
//           <p className={css.geographiesLocation}>Eastern Europe (9)</p>
//           <p className={css.geographiesLocation}>Western Europe (18)</p>
//           <p className={css.geographiesLocation}>Latin America (7)</p>
//           <p className={css.geographiesLocation}>North America (2)</p>
//         </div>
//         <img className={css.geographiesMap} src={Map} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Geographies;

import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const Example = () => {
  return (
    <div className={css.geographiesSection} id="geographies">
      <div className={css.geographiesTextBlock}>
        <div className={css.accordion}>
          <Accordion allowMultiple>
            <AccordionItem
              header={
                <div>
                  <p className={css.licationItem}>Asia - Pacific (11)</p>
                </div>
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header="Eastern Europe (9)">
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
              accumsan auctor mi.
            </AccordionItem>

            <AccordionItem header="Western Europe (18)">
              Suspendisse massa risus, pretium id interdum in, dictum sit amet
              ante. Fusce vulputate purus sed tempus feugiat.
            </AccordionItem>

            <AccordionItem header="Latin America (7)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header="North America (2)">
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
              accumsan auctor mi.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Example;
