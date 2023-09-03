import React, { useState } from 'react';
import css from './ClientPortalSidebar.module.css';

const ClientPortalSidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <aside className={`${css.sideBar} ${sideBarOpen ? css.sideBarOpen : ''}`}>
      <button className={css.toggleButton} onClick={toggleSideBar}>
        Bar
      </button>
    </aside>
  );
};

export default ClientPortalSidebar;
