import React, { useState } from 'react';
import css from './ClientPortalSidebar.module.css';

const ClientPortalSidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div className={`${css.sideBar} ${sideBarOpen ? css.sideBarOpen : ''}`}>
      <div className={css.sideBar}></div>
      <button className={css.toggleButton} onClick={toggleSideBar}>
        Toggle SideBar
      </button>
    </div>
  );
};

export default ClientPortalSidebar;
