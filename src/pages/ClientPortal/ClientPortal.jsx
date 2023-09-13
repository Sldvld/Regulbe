import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import css from './ClientPortal.module.css';
import sprite from '../../assets/sprite.svg';
import logo from '../../assets/logo-regulbe.svg';
import arr from '../../assets/sprite.svg';

const AccordionItem = ({ header, icon, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {icon && (
          <svg className={css.iconAccordion} width="24" height="24">
            <use href={icon} />
          </svg>
        )}
        {header}
        <svg width="24" height="24" className={css.arrowSvg}>
          <use href={arr + '#icon-arr-down'} />
        </svg>
      </>
    }
    className={css.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${css.itemBtn} ${isEnter && css.itemBtnExpanded}`,
    }}
    contentProps={{ className: css.itemContent }}
    panelProps={{ className: css.itemPanel }}
  />
);

const ClientPortal = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
    setIsClicked(!isClicked);
  };

  const contentClass = `${css.contentClass} ${
    sideBarOpen ? css.contentShifted : ''
  }`;

  const countries = [
    'Australia',
    'New Zealand',
    'Hong Kong',
    'India',
    'Indonesia',
    'Japan',
    'Malaysia',
    'Philippines',
    'South Korea',
    'Singapore',
  ];

  return (
    <div className={css.container}>
      <aside className={`${css.sideBar} ${sideBarOpen ? css.sideBarOpen : ''}`}>
        <NavLink className={css.headerLogo} to="/">
          <img src={logo} alt="Logo" className={css.logo} />
        </NavLink>
        <button className={css.toggleButton} onClick={toggleSideBar}>
          <svg
            className={`${css.doubleArrowSvg} ${
              isClicked ? css.clickedIcon : ''
            }`}
            width="32"
            height="32"
          >
            <use href={sprite + '#icon-double-arrow'} />
          </svg>
        </button>
        <div className={css.accordion}>
          <Accordion transition transitionTimeout={250}>
            <AccordionItem header="TOPICS" icon={sprite + '#icon-file'}>
              ALL TOPICS <br /> Market access <br /> Licensing
              <br /> Regulatory Reporting
              <br /> Billing requirements
              <br /> Licensing Fees
              <br /> Numbering: allocation
              <br /> Numbering: sub-allocation
              <br /> Numbering: reporting obligations
              <br /> Numbering: territoriality restrictions
              <br /> Numbering: fees
              <br /> Lawful Interception
              <br /> Lawful Enforcement: customer data disclosure
            </AccordionItem>

            <AccordionItem header="COUNTRIES" icon={sprite + '#icon-location'}>
              Australia <br />
              New Zealand <br /> Hong Kong
              <br /> India
              <br /> Indonesia
              <br /> Japan
              <br /> Malaysia
              <br /> Philippines
              <br /> South Korea
              <br /> Singapore
            </AccordionItem>
          </Accordion>
        </div>
        <a href="mailto: info@regulbe.com">
          <svg className={css.iconOutblock} width="24" height="24">
            <use href={sprite + '#icon-?'} />
          </svg>
        </a>
      </aside>

      <div className={contentClass}>
        <header className={css.clienPortalHeader}>
          <div className={css.headerContainer}>
            <p className={css.headerTitle}>CLIENT PORTAL</p>
            <NavLink to="/" className={css.logout}>
              LOG OUT
            </NavLink>
          </div>
        </header>
        <section>
          <div className={css.mainSection}>
            <h1 className={css.mainHeader}>NOMANDIC NUMBERS</h1>
            <p className={css.updateData}>
              <span className={css.updateTitle}>Last update: </span>August 10,
              2023
            </p>
            <div className={css.descriptionBlock}>
              <p className={css.shortDescription}>Short description</p>
              <p className={css.showHide}>Show/Hide</p>
            </div>
            <div className={css.tableContainer}>
              <div className={css.tableWrapper}></div>
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
                  {countries.map((country, index) => (
                    <tr key={index}>
                      <td>{country}</td>
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
            </div>
            <div className={css.disclaimerBlock}>
              <h2 className={css.disclaimerTitle}>DISCLAIMER:</h2>
              <p className={css.disclaimerText}>
                The information provided on this website does not, and is not
                intended to, constitute legal advice, instead, all information,
                content, and materials available on this site are for general
                information purposes only. Information on this website may not
                constitute the most up-to-date legal or other information. This
                website contains links to other third-party websites. Such links
                are only for the convenience of the reader, user or browser.
                Regulbe does not recommend or endorse the contents of the
                third-party websites.
              </p>
              <p className={css.disclaimerText}>
                Readers of this website shoule contact their attorney to obtain
                advice with respect to any particular legal matter. No reader,
                user, or browther of this site should act or refrain from acting
                on the basis of information on this website without first
                seeking legal advice from counsel in the relevant
                jurisdiction.Only your individual attorney can provide
                assurances that the information contained herein - and your
                interpretation of it - is applicable or appropriate to your
                particular situation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientPortal;
