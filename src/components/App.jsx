import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const ClientPortal = lazy(() => import('pages/ClientPortal/ClientPortal'));
const ContactUs = lazy(() => import('pages/ContactUs/ContactUs'));
const TermsAndConditions = lazy(() =>
  import('pages/TermsAndConditions/TermsAndConditions')
);
const PrivacyPolicy = lazy(() => import('pages/PrivacyPolicy/PrivacyPolicy'));
const Careers = lazy(() => import('pages/Careers/Careers'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/clientportal" element={<ClientPortal />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
