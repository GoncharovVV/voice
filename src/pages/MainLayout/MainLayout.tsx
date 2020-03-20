import React, { ReactNode } from 'react';
import AsideMenu from '../../components/AsideMenu';
import './MainLayout.scss';
import Navigation from '../../components/Navigation';
import CommingSoon from '../CommingSoon';
export interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <main className="main main_private">
        <AsideMenu />
        <Navigation />
        {children ? children : <CommingSoon />}
      </main>
    </>
  );
};

export default MainLayout;
