import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table, Row, Col } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';


function AttributeValues() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [attributeValues, setAttributeValues] = useState(['']);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({ id: '', name: '', category: '' });



  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const catRes = await axios.get("http://localhost:2000/api/userCategories/getAllCategories");
      const subCatRes = await axios.get("http://localhost:2000/api/userSubCategory/getAllSubCategories");
      setCategories(catRes.data);
      setSubCategories(subCatRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddValueField = () => {
    setAttributeValues([...attributeValues, '']);
  };

  const handleValueChange = (index, value) => {
    const updated = [...attributeValues];
    updated[index] = value;
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

      for (const val of attributeValues) {
        if (val.trim() !== '') {
          await axios.post("http://localhost:2000/api/userSubCategory/CreateSubCategory", {
            name: val,
            category: selectedCategory,
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
      await axios.delete(`http://localhost:2000/api/userSubCategory/deleteSubCategory/${id}`);
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
    await axios.put(`http://localhost:2000/api/userSubCategory/updateSubCategory/${editData.id}`, {
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
    setAttributeValues(['']);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Attribute Values</h4>
        <Button onClick={() => setShowModal(true)}>Add Attribute Value</Button>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Attributes</th>
            <th>Attribute Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subCategories.map((sub, index) => (
            <tr key={sub._id}>
              <td>{index + 1}</td>
              <td>{sub.category?.name}</td>
              <td>{sub.name}</td>
              <td>
                <IconButton onClick={() => openEditModal(sub)} color="primary"><Edit /></IconButton>
                <IconButton onClick={() => handleDelete(sub._id)} color="error"><Delete /></IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

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
          {attributeValues.map((val, index) => (
            <Row key={index} className="mb-2 align-items-center">
              <Col>
                <Form.Control
                  value={val}
                  onChange={(e) => handleValueChange(index, e.target.value)}
                  placeholder="Enter value"
                />
              </Col>
              <Col xs="auto">
                <Button variant="danger" onClick={() => handleRemoveValueField(index)}>
                  Delete
                </Button>
                
              </Col>
            </Row>
          ))}
          <Button variant="info" onClick={handleAddValueField}>
            + Add Value
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

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
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
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
    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleUpdate}>
      Update Data
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
}

export default AttributeValues;
