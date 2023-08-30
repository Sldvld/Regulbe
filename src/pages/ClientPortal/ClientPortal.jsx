import ClienPortalHeader from 'components/ClientPortalHeader/ClientPortal.header';
import ClientPortalMain from 'components/ClientPortalMain/ClientPortalMain';
import ClientPortalSidebar from 'components/ClientPortalSidebar/ClientPortalSidebar';

// import css from './ClientPortal.module.css';

const ClientPortal = () => {
  return (
    <>
      <ClientPortalSidebar />
      <ClienPortalHeader />
      <ClientPortalMain />
    </>
  );
};

export default ClientPortal;
