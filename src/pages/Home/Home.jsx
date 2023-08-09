import React from 'react';
import backgroundImg from '../../assets/bckg.jpg';
import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={css.container}>
        <div
          className={css.bckg}
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <h1 className={css.heroText}>
            Regulbe - regulatory compliance services for VolP and cloud - based
            communications service providers
          </h1>
        </div>
      </div>
    </>
  );
};
export default Home;
