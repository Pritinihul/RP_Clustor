// src/FrontendUser/Layout.jsx

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '90vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
