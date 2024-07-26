import React from 'react';
import Footer from './Footer'; // Adjust the path as necessary

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;