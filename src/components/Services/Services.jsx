import css from './Services.module.css';

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
          <ul>
            <li className={css.servicesBlocks}>
              <div></div>
            </li>
            <li className={css.servicesBlocks}>
              <div></div>
            </li>
            <li className={css.servicesBlocks}>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
