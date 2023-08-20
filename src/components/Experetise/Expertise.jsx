import css from './Expertise.module.css';

const Expertise = () => {
  return (
    <section>
      <div className={css.expertiseSection} id="expertise">
        <h2 className={css.expertiseHeader}>EXPERTISE</h2>
        <div className={css.expertiseTextBlock}>
          <span className={css.expertiseText}>Market access</span>
          <span className={css.expertiseText}>Licensing</span>
          <span className={css.expertiseText}>Regulatory reporting</span>
          <span className={css.expertiseText}>Billing requirements</span>
          <span className={css.expertiseText}>Licensing fees</span>
          <span className={css.expertiseText}>Numbering: allocation</span>
          <span className={css.expertiseText}>Numbering: sub-allocation</span>
          <span className={css.expertiseText}>
            Numbering: reporting obligations
          </span>
          <span className={css.expertiseText}>
            Numbering: territoriality restrictions
          </span>
          <span className={css.expertiseText}>Numbering: fees</span>
          <span className={css.expertiseText}>Lawful interception</span>
          <span className={css.expertiseText}>
            Lawful enforcement: customer data disclosure
          </span>
          <span className={css.expertiseText}>Data retention</span>
          <span className={css.expertiseText}>Incident reporting</span>
          <span className={css.expertiseText}>KYC requirements</span>
          <span className={css.expertiseText}>Consumer contracts</span>
          <span className={css.expertiseText}>Emergency services</span>
          <span className={css.expertiseText}>Directory Services</span>
        </div>
        <p className={css.expertiseNote}>
          *This is an indicative list of expertise areas based on the most
          frequent requests of our clients. Please feel free to reach out to us
          for more specific questions.
        </p>
      </div>
    </section>
  );
};

export default Expertise;
