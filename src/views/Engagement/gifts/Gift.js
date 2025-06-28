import React, { useState } from 'react';
import { Dropdown, Button, Badge } from 'react-bootstrap';
import { FaGift } from "react-icons/fa6";
import './Gift.css';

const Gift = () => {
  const categories = [
    { name: 'All Category', count: 12 },
    { name: 'Romantic', count: 4 },
    { name: 'Power', count: 3 },
    { name: 'Soft & Cute', count: 6 },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const allGifts = [
    { id: 1, name: 'Teddy Bear', category: 'Soft & Cute', coin: 30, image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/12300132a.webp' },
    { id: 2, name: 'Rose', category: 'Romantic', coin: 15, image: 'https://tse2.mm.bing.net/th?id=OIP.IJPf_YbXUyRzvn0KIC57gQHaFj&pid=Api&P=0&h=180' },
    { id: 3, name: 'Lightning Bolt', category: 'Power', coin: 50, image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/12300132a.webp' },
    { id: 4, name: 'Heart', category: 'Romantic', coin: 25, image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/12300132a.webp' },
    { id: 5, name: 'Cuddly Cat', category: 'Soft & Cute', coin: 20, image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/12300132a.webp' },
    { id: 6, name: 'Fireball', category: 'Power', coin: 40, image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/12300132a.webp' },
  ];

  const filteredGifts = selectedCategory === 'All Category'
    ? allGifts
    : allGifts.filter(g => g.category === selectedCategory);

  const getBadgeVariant = (category) => {
    switch (category) {
      case 'Romantic': return 'danger';
      case 'Power': return 'warning';
      case 'Soft & Cute': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <div className="gift-page">
      <div className="header">
        <h4>🎁 Gift Management</h4>
        <div className="header-right">
          <Dropdown>
            <Dropdown.Toggle style={{backgroundColor:'#9747FF'}} size="sm">Filter by Category</Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((cat, i) => (
                <Dropdown.Item key={i} onClick={() => setSelectedCategory(cat.name)}>
                  {cat.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button size="sm" style={{backgroundColor:'#9747FF'}}>Add New Gift</Button>
        </div>
      </div>

      <div className='summeryCard'>
        <div className='summary-card'>
          <div className='card-header'>
            <div>
              <span>Total Gifts</span>
              <h3>12</h3>
            </div>
            <span className="gift-icon"><FaGift /></span>
          </div>
        </div>
        <div className='summary-card'>
          <div className='card-header'>
            <div>
              <span>Gifts sent today</span>
              <h3>12</h3>
            </div>
            <span className="gift-icon"><FaGift /></span>
          </div>
        </div>
        <div className='summary-card'>
          <div className='card-header'>
            <div>
              <span>Active Users</span>
              <h3>12</h3>
            </div>
            <span className="gift-icon"><FaGift /></span>
          </div>
        </div>
      </div>

      <div className="categoryButtons">
        {categories.map((cat, i) => (
         <Button
            key={i}
            size="sm"
            variant={selectedCategory === cat.name ? '' : 'outline-secondary'}
            className={selectedCategory === cat.name ? 'custom-active' : ''}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name} ({cat.count})
          </Button>
        ))}
      </div>

      <div className="gift-grid">
        {filteredGifts.map(gift => (
          <div key={gift.id} className="giftCard animated-card">
            <img src={gift.image} alt={gift.name} />
            <div className="gift-details">
              <h6>{gift.name}</h6>
              <Badge bg={getBadgeVariant(gift.category)} className="mb-2">{gift.category}</Badge>
              <p>{gift.coin} coins</p>
            </div>
            <div className="gift-actions">
              <Button size="sm" variant="primary" className="me-2 edit-btn">Edit</Button>
              <Button size="sm" variant="outline-danger">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;
