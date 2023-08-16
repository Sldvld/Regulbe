import css from './Services.module.css';
import sprite from '../../assets/sprite.svg';

const Services = () => {
  return (
    <div className={css.servicesSection} id="services">
      <div className={css.servicesBlock}>
        <div>
          <h2 className={css.servicesHeader}>SERVICES</h2>
          <p className={css.servicesText}>
            Provision of cloud-based communications services require strong
            regulatory support to stay compliant with applicable laws across
            multiple geographies.
          </p>
          <p className={css.servicesText}>
            Identifying and decoding local requirements as well as staying
            informed off all the relevant changes and developments might not
            only be challenging, but also require a lot of resources.
          </p>
          <p className={css.servicesText}>
            Regulbe provides structured regulatory compliance data corresponding
            to the needs and interests of our clients.
          </p>
        </div>
        <div className={css.servicesPrinciples}>
          <ul className={css.servicesList}>
            <li className={css.servicesBlocks}>
              <div className={css.servicesItem}>
                <div className={css.servicesIconAround}>
                  <svg className={css.servicesIcons} width="48px" height="48px">
                    <use href={sprite + '#db'} />
                  </svg>
                </div>
                <p className={css.servicesDescription}>
                  Access to databases with regulatory compliance information
                </p>
              </div>
            </li>
            <li className={css.servicesBlocks}>
              <div className={css.servicesItem}>
                <div className={css.servicesIconAround}>
                  <svg className={css.servicesIcons} width="40px" height="40px">
                    <use href={sprite + '#loop'} />
                  </svg>
                </div>
                <p className={css.servicesDescription}>Regulatory research</p>
              </div>
            </li>
            <li className={css.servicesBlocks}>
              <div className={css.servicesItem}>
                <div className={css.servicesIconAround}>
                  <svg className={css.servicesIcons} width="32px" height="40px">
                    <use href={sprite + '#letter'} />
                  </svg>
                </div>
                <p className={css.servicesDescription}>
                  Regulatory compliance product assessment
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
