import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const ClientPortal = lazy(() => import('pages/ClientPortal/ClientPortal'));
const ContactUs = lazy(() => import('pages/ContactUs/ContactUs'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/clientportal" element={<ClientPortal />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};
