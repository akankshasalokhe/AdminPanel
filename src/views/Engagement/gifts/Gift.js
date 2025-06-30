import React, { useEffect, useState } from 'react';
import {
  Dropdown, Button, Badge, Spinner, Modal, Form, Pagination,
} from 'react-bootstrap';
import { FaGift } from 'react-icons/fa6';
import { CCard } from '@coreui/react';
import axios from 'axios';
import './Gift.css';

const Gift = () => {
  const [categories, setCategories] = useState([{ name: 'All Categories' }]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newGift, setNewGift] = useState({ name: '', price: '', category: '', image: null });
  const [errors, setErrors] = useState({});
  const [sortKey, setSortKey] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const giftsPerPage = 8;

  const API = 'https://datingapp-p2d5.onrender.com';

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${API}/api/categories/getGiftCategory`);
;
      setCategories([{ name: 'All Categories' }, ...data.categories]);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const fetchGifts = async () => {
  setLoading(true);
  try {
    const { data } = await axios.get(`${API}/api/gifts/getAllGifts`, {
      params: {
        category: selectedCategory,
        page: currentPage,
        limit: giftsPerPage,
      },
    });

    let sortedGifts = [...data.gifts];
    if (sortKey === 'price') {
      sortedGifts.sort((a, b) => a.price - b.price);
    } else if (sortKey === 'popularity') {
      sortedGifts.sort((a, b) => b.sentCount - a.sentCount);
    }
    setGifts(sortedGifts);
  } catch (err) {
    console.error('Failed to fetch gifts:', err);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchGifts();
  }, [selectedCategory, sortKey]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this gift?')) {
      try {
        await axios.delete(`${API}/api/gifts/deleteGift/${id}`);
        fetchGifts();
      } catch (err) {
        console.error('Delete error:', err);
      }
    }
  };

  const handleModalChange = (e) => {
    const { name, value, files } = e.target;
    setNewGift(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!newGift.name) newErrors.name = 'Name is required';
    if (!newGift.price || isNaN(newGift.price)) newErrors.price = 'Valid price required';
    if (!newGift.category) newErrors.category = 'Category is required';
    if (!newGift.image) newErrors.image = 'Image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddGift = async () => {
    if (!validate()) return;
    const formData = new FormData();
    formData.append('name', newGift.name);
    formData.append('price', newGift.price);
    formData.append('category', newGift.category);
    formData.append('image', newGift.image);
    try {
      await axios.post(`${API}/api/gifts/createGifts`, formData);
      setShowModal(false);
      setNewGift({ name: '', price: '', category: '', image: '' });
      fetchGifts();
    } catch (err) {
      console.error('Add Gift Error:', err);
    }
  };

  const giftsToShow = gifts.slice((currentPage - 1) * giftsPerPage, currentPage * giftsPerPage);
  const totalPages = Math.ceil(gifts.length / giftsPerPage);

  return (
    <CCard>
      <div className="gift-page p-3">
        <div className="header d-flex justify-content-between align-items-center mb-3">
          <h4>Gift Management</h4>
          <div className="d-flex gap-2">
            <Dropdown>
              <Dropdown.Toggle style={{ backgroundColor: '#9747FF' }} size="sm">
                Filter by Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {categories.map((cat, i) => (
                  <Dropdown.Item key={i} onClick={() => setSelectedCategory(cat.name)}>
                    {cat.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" size="sm">Sort</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortKey('price')}>By Price</Dropdown.Item>
                <Dropdown.Item onClick={() => setSortKey('popularity')}>By Popularity</Dropdown.Item>
                <Dropdown.Item onClick={() => setSortKey('')}>Reset</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button size="sm" onClick={() => setShowModal(true)} style={{ backgroundColor: '#9747FF' }}>
              Add New Gift
            </Button>
          </div>
        </div>

        <div className='summeryCard mb-3'>
          <div className='summary-card'>
            <div className='card-header'>
              <div>
                <span>Total Gifts</span>
                <h3>{gifts.length}</h3>
              </div>
              <span className="gift-icon"><FaGift /></span>
            </div>
          </div>
        </div>

        <div className="categoryButtons mb-3">
          {categories.map((cat, i) => (
            <Button
              key={i}
              size="sm"
              variant={selectedCategory === cat.name ? '' : 'outline-secondary'}
              className={selectedCategory === cat.name ? 'custom-active' : ''}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="text-center my-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <div className="gift-grid">
              {giftsToShow.map(gift => (
                <div key={gift._id} className="giftCard animated-card">
                  <img src={gift.image} alt={gift.name} />
                  <div className="gift-details ms-2">
                    <h6>{gift.name}</h6>
                    <Badge bg="secondary" className="mb-2">{gift.category}</Badge>
                    <p>{gift.price} coins</p>
                  </div>
                  <div className="gift-actions mb-2">
                    <Button size="sm" variant="primary" className="me-2 edit-btn">Edit</Button>
                    <Button size="sm" variant="outline-danger" onClick={() => handleDelete(gift._id)}>Delete</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center mt-3">
              <Pagination>
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item key={i} active={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </>
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Gift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="giftName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={newGift.name}
                onChange={handleModalChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="giftPrice" className="mt-2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                value={newGift.price}
                onChange={handleModalChange}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="giftCategory" className="mt-2">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={newGift.category}
                onChange={handleModalChange}
                isInvalid={!!errors.category}
              >
                <option value="">-- Select --</option>
                {categories.filter(c => c.name !== 'All Categories').map((c, i) => (
                  <option key={i} value={c.name}>{c.name}</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="giftImage" className="mt-2">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="file"
                onChange={handleModalChange}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddGift}>Add Gift</Button>
        </Modal.Footer>
      </Modal>
    </CCard>
  );
};

export default Gift;
