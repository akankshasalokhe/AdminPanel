import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button, Modal, Form, Row, Col, Card, Dropdown, Pagination, InputGroup, FormControl,
  ButtonGroup
} from 'react-bootstrap';
import { FaCoins, FaBox, FaDollarSign, FaGift } from 'react-icons/fa';

const Gift = () => {
  const [gifts, setGifts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [giftForm, setGiftForm] = useState({ name: '', price: '', category: '', subcategory: '', image: null, stockCount: '' });
  const [editingGiftId, setEditingGiftId] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [sentToday, setSentToday] = useState(0);
  const limit = 8;

  // Fetch categories + subcategories
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:2000/api/categories/getGiftCategory');
      setCategories(data.categories);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch categories');
    }
  };

  // Fetch gifts and stats
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchGifts();
    fetchStats();
  }, [selectedCategory, selectedSubcategory, page, search]);

  const fetchGifts = async () => {
    try {
      const { data } = await axios.get('http://localhost:2000/api/gifts/getAllGifts', {
        params: { category: selectedCategory, subcategory: selectedSubcategory, page, limit, search }
      });
      setGifts(data.gifts);
      setTotal(data.total);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch gifts.');
    }
  };

  const fetchStats = async () => {
    try {
      const { data } = await axios.get('http://localhost:2000/api/gifts/stats');
      setRevenue(data.revenue);
      setSentToday(data.sentToday);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
    setPage(1);
  };

  const handleModalShow = (type, gift = null) => {
    setModalType(type);
    setGiftForm(gift ? {
      name: gift.name,
      price: gift.price,
      category: gift.category,
      subcategory: gift.subcategory || '',
      image: null,
      stockCount: gift.stockCount
    } : { name: '', price: '', category: '', subcategory: '', image: null, stockCount: '' });
    setEditingGiftId(gift?._id || null);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setGiftForm({ name: '', price: '', category: '', subcategory: '', image: null, stockCount: '' });
    setEditingGiftId(null);
  };

  const handleSubmit = async () => {
    const { name, price, category, stockCount } = giftForm;
    if (!name || !price || !category || !stockCount) {
      return alert('Please fill in all required fields.');
    }
    const formData = new FormData();
    Object.entries(giftForm).forEach(([k, v]) => v != null && formData.append(k, v));

    try {
      if (modalType === 'add') {
        await axios.post('http://localhost:2000/api/gifts/createGifts', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Gift added successfully!');
      } else {
        await axios.put(`http://localhost:2000/api/gifts/updateGift/${editingGiftId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Gift updated successfully!');
      }
      fetchGifts();
      handleModalClose();
    } catch (err) {
      console.error(err);
      alert('Error: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this gift?')) return;
    try {
      await axios.delete(`http://localhost:2000/api/gifts/deleteGift/${id}`);
      alert('Gift deleted.');
      fetchGifts();
    } catch (err) {
      console.error(err);
      alert('Delete failed: ' + (err.response?.data?.message || err.message));
    }
  };

  const renderPagination = () => {
    const pages = Math.ceil(total / limit);
    return (
      <Pagination>
        {Array.from({ length: pages }, (_, i) => i + 1).map(num => (
          <Pagination.Item key={num} active={num === page} onClick={() => setPage(num)}>
            {num}
          </Pagination.Item>
        ))}
      </Pagination>
    );
  };

  const renderSubcategories = () => {
    if (selectedCategory === 'All Categories') return null;
    const categoryObj = categories.find(cat => cat.name === selectedCategory);
    const subcategories = categoryObj?.subcategories || [];

    return (
      <Row className="mt-2 flex-nowrap overflow-auto" style={{ whiteSpace: 'nowrap' }}>
        {subcategories.map((subcat, index) => (
          <Col key={index} xs="auto">
            <Button
              variant={selectedSubcategory === subcat ? 'primary' : 'outline-secondary'}
              className="me-2 mb-2"
              onClick={() => { setSelectedSubcategory(subcat); setPage(1); }}
            >
              {subcat}
            </Button>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div className="p-4">
      <Row className="mb-3 align-items-center justify-content-between">
        <Col><h3>🎁 Dating Gifts Management</h3></Col>
        <Col md={4}>
          <InputGroup>
            <FormControl
              placeholder="Search gifts"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
            />
          </InputGroup>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center bg-light">
            <Card.Body>
              <h6>Total Gift Revenue</h6>
              <h4><FaDollarSign /> {revenue}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-light">
            <Card.Body>
              <h6>Total Gifts</h6>
              <h4><FaGift /> {total}</h4>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center bg-light">
            <Card.Body>
              <h6>Gifts Sent Today</h6>
              <h4><FaBox /> {sentToday}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3 justify-content-between align-items-center">
        <Col md={9}>
          <ButtonGroup className="flex-wrap gap-2">
            {["All Categories", ...categories.map(cat => cat.name)].map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "primary" : "outline-dark"}
                onClick={() => handleCategoryClick(cat)}
                className="me-2 mb-2"
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
        <Col md={2} className="text-end">
          <Button onClick={() => handleModalShow('add')}>Add Gift</Button>
        </Col>
      </Row>

      {renderSubcategories()}

      <Row>
        {gifts.map(gift => {
          const img = gift.image?.startsWith('http')
            ? gift.image
            : `http://localhost:2000/uploads/${gift.image}`;
          return (
            <Col md={3} key={gift._id} className="mb-4">
              <Card>
                <Card.Body>
                  <div className="text-center mb-2">
                    <img
                      src={img}
                      alt={gift.name}
                      style={{ height: '150px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
                      onError={e => (e.target.src = 'https://via.placeholder.com/150')}
                    />
                  </div>
                  <h5>{gift.name}</h5>
                  <p className="text-muted mb-1">{gift.category} {gift.subcategory && `> ${gift.subcategory}`}</p>
                  <p className="mb-1"><FaCoins /> <strong>{gift.price}</strong> coins</p>
                  <p className="mb-2"><FaBox /> <strong>{gift.stockCount || 0}</strong> in stock</p>
                  <div className="d-flex justify-content-between">
                    <Button variant="warning" size="sm" onClick={() => handleModalShow('edit', gift)}>Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDelete(gift._id)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <div className="d-flex justify-content-center mt-3">{renderPagination()}</div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === 'add' ? 'Add Gift' : 'Edit Gift'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {['name', 'price', 'stockCount'].map(field => (
              <Form.Group key={field} className="mb-3">
                <Form.Label>{field === 'price' ? 'Price (coins)' : field === 'stockCount' ? 'Stock Count' : 'Name'}</Form.Label>
                <Form.Control
                  type={field === 'name' ? 'text' : 'number'}
                  value={giftForm[field]}
                  onChange={e => setGiftForm({ ...giftForm, [field]: e.target.value })}
                />
              </Form.Group>
            ))}
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={giftForm.category}
                onChange={e => {
                  const selected = e.target.value;
                  setGiftForm({ ...giftForm, category: selected, subcategory: '' });
                }}
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            {giftForm.category && (
              <Form.Group className="mb-3">
                <Form.Label>Subcategory</Form.Label>
                <Form.Select
                  value={giftForm.subcategory}
                  onChange={e => setGiftForm({ ...giftForm, subcategory: e.target.value })}
                >
                  <option value="">Select subcategory</option>
                  {(categories.find(c => c.name === giftForm.category)?.subcategories || []).map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={e => setGiftForm({ ...giftForm, image: e.target.files[0] })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>{modalType === 'add' ? 'Add' : 'Update'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gift;
