import { Container } from '@mui/material';
import React from 'react';
import './Header.css';

function Header({ activePage, setActivePage }) {
  const navItems = ['Profile','History', 'Gift', 'Package', 'Coin', 'User Activity', 'Support'];

  const handleClick = (item) => {
    setActivePage(item);
    console.log(`Navigated to ${item}`);
  };

  return (
    <Container className="head mb-4">
      <div className="navbar-container">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${activePage === item ? 'active' : ''}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Header;
