import css from './Pricing.module.css';

const Pricing = () => {
  return (
    <div className={css.pcicingSection} id="pricing">
      <div className={css.pricingWrapper}>
        <h2 className={css.pricingHeader}>PRICING</h2>
      </div>
      <div className={css.pricingWrapper}>
        <ul className={css.pricingList}>
          <li className={css.pricingItem}>
            At Regulbe, we believe in transparent and accessible pricing for our
            services. Prospective clients can always approach us to receive a
            personalized fee quote.
          </li>
          <li className={css.pricingItem}>
            We kindly request a brief description of your question or project,
            along with a list of countries for which you require information.
            All the requests remain confidential.
          </li>
        </ul>
        <ul className={css.pricingList}>
          <li className={css.pricingItem}>
            Our team of experts will diligently assess your needs and tailor a
            competitive pricing package to suit your requirements.
          </li>
          <li className={css.pricingItem}>
            Feel free to contact us today and let us assist you in navigating
            the complexities of global regulatory compliance information with
            ease.
          </li>
        </ul>
      </div>
      <button className={css.feeButton} type="button">
        Get a fee quote →
      </button>
    </div>
  );
};

export default Pricing;
