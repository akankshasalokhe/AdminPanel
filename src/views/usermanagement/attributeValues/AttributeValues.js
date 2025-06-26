import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const ITEMS_PER_PAGE = 7;

function AttributeValues() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [attributeValues, setAttributeValues] = useState([{ value: '', image: null }]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({ id: '', name: '', category: '' });

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTerm, subCategories]);

  const fetchAll = async () => {
    try {
      const catRes = await axios.get("https://datingapp-p2d5.onrender.com/api/userCategories/getAllCategories");
      const subCatRes = await axios.get("https://datingapp-p2d5.onrender.com/api/userSubCategory/getAllSubCategories");
      setCategories(catRes.data);
      setSubCategories(subCatRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = () => {
    const filtered = subCategories.filter(sub =>
      sub.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.category?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSubCategories(filtered);
  };

  const paginatedData = filteredSubCategories.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleAddValueField = () => {
    setAttributeValues([...attributeValues, { value: '', image: null }]);
  };

  const handleValueChange = (index, value) => {
    const updated = [...attributeValues];
    updated[index].value = value;
    setAttributeValues(updated);
  };

  const handleImageChange = (index, file) => {
    const updated = [...attributeValues];
    updated[index].image = file;
    setAttributeValues(updated);
  };

  const handleRemoveValueField = (index) => {
    const updated = [...attributeValues];
    updated.splice(index, 1);
    setAttributeValues(updated);
  };

  const handleCreate = async () => {
    try {
      if (!selectedCategory || attributeValues.length === 0) {
        alert('Please select a category and add at least one value.');
        return;
      }

      for (const attr of attributeValues) {
        if (attr.value.trim() !== '') {
          const formData = new FormData();
          formData.append("name", attr.value);
          formData.append("category", selectedCategory);
          if (attr.image) formData.append("image", attr.image);

          await axios.post("https://datingapp-p2d5.onrender.com/api/userSubCategory/CreateSubCategory", formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
        }
      }

      fetchAll();
      handleReset();
      setShowModal(false);
    } catch (error) {
      console.error('Error adding values:', error);
      alert('Failed to add values.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://datingapp-p2d5.onrender.com/api/userSubCategory/deleteSubCategory/${id}`);
      fetchAll();
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const openEditModal = (sub) => {
    setEditData({
      id: sub._id,
      name: sub.name,
      category: sub.category?._id || '',
    });
    setShowEditModal(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://datingapp-p2d5.onrender.com/api/userSubCategory/updateSubCategory/${editData.id}`, {
        name: editData.name,
        category: editData.category,
      });
      fetchAll();
      setShowEditModal(false);
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update value.');
    }
  };

  const handleReset = () => {
    setSelectedCategory('');
    setAttributeValues([{ value: '', image: null }]);
  };

  const groupedData = () => {
    const grouped = {};
    paginatedData.forEach((item) => {
      const catName = item.category?.name || "Unknown";
      if (!grouped[catName]) grouped[catName] = [];
      grouped[catName].push(item);
    });
    return grouped;
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Attribute Values</h4>
        <Button onClick={() => setShowModal(true)}>Add Attribute Value</Button>
      </div>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by attribute or value..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Attribute</th>
            <th>Attribute Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData()).map(([category, items], catIndex) =>
            items.map((sub, index) => (
              <tr key={sub._id}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + catIndex + index + 1}</td>
                <td>{category}</td>
                <td>{sub.name}</td>
                <td>
                  <IconButton onClick={() => openEditModal(sub)} color="primary"><Edit /></IconButton>
                  <IconButton onClick={() => handleDelete(sub._id)} color="error"><Delete /></IconButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end gap-2 my-2">
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Previous</Button>
        <Button disabled={currentPage * ITEMS_PER_PAGE >= filteredSubCategories.length} onClick={() => setCurrentPage(p => p + 1)}>Next</Button>
      </div>

      {/* Add Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Attribute Values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Select Attribute</Form.Label>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">-- Select Attribute --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Label>Values</Form.Label>
          {attributeValues.map((attr, index) => (
            <Row key={index} className="mb-2 align-items-center">
              <Col>
                <Form.Control
                  value={attr.value}
                  onChange={(e) => handleValueChange(index, e.target.value)}
                  placeholder="Enter value"
                />
              </Col>
              <Col>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(index, e.target.files[0])}
                />
              </Col>
              <Col xs="auto">
                <Button variant="danger" onClick={() => handleRemoveValueField(index)}>Delete</Button>
              </Col>
            </Row>
          ))}

          <Button variant="info" onClick={handleAddValueField}>+ Add Value</Button>
        </Modal.Body>
        <Modal.Footer className="justify-content-end">
          <Button variant="secondary" onClick={handleReset}>Reset</Button>
          <Button variant="primary" onClick={handleCreate}>Add</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Attribute Value</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Attribute</Form.Label>
            <Form.Select
              value={editData.category}
              onChange={(e) => setEditData({ ...editData, category: e.target.value })}
            >
              <option value="">-- Select Attribute --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Attribute Value</Form.Label>
            <Form.Control
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              placeholder="Enter value"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update Data</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AttributeValues;
