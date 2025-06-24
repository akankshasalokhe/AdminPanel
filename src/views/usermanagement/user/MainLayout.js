// MainLayout.js
import React, { useState } from 'react';
import Header from './Header';
import UserManagement from './UserManagement';
import History from './History'
import Gift from './Gift';
import Coin from './Coin';
import Package from './Package';
import UserActivity from './UserActivity';
import Support from './Support';
import ProfilePage from './ProfilePage';

const MainLayout = () => {
  const [activePage, setActivePage] = useState('Profile');

  const renderPage = () => {
    switch (activePage) {
      case 'Profile':
        return <UserManagement />;
      case 'History':
        return <History />;
      case 'Gift':
        return <Gift />;
      case 'Coin':
        return <Coin />;
      case 'Package':
        return <Package />;
      case 'User Activity':
        return <UserActivity />;
      case 'Support':
        return <Support />;
      default:
        return <UserManagement />;
    }
  };

  return (
    <div>
      <Header activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
};

export default MainLayout;
