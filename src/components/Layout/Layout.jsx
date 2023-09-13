import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
