import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from './TopHeader';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopHeader />
      <div className="h-12"></div> {/* Отступ после TopHeader */}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="bg-black text-white mt-auto" />
    </div>
  );
};

export default Layout;