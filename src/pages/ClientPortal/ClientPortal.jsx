// ClientPortal.jsx
import React, { useState } from 'react';
import ClientPortalSidebar from 'components/ClientPortalSidebar/ClientPortalSidebar';
import ClientPortalHeader from 'components/ClientPortalHeader/ClientPortal.header';
import ClientPortalMain from 'components/ClientPortalMain/ClientPortalMain';
import css from './ClientPortal.module.css';

const ClientPortal = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div
      className={`${css.clientPortal} ${sideBarOpen ? css.sidebarOpen : ''}`}
    >
      <ClientPortalSidebar toggleSideBar={toggleSideBar} />
      <div className={css.content}>
        <ClientPortalHeader />
        <ClientPortalMain />
      </div>
    </div>
  );
};

export default ClientPortal;
