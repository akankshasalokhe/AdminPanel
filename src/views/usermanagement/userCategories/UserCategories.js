import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CCard, CCardBody, CCardHeader, CButton, CModal, CModalBody, CModalHeader, CModalTitle, CForm, CFormInput,
} from '@coreui/react';
import {
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Pagination,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const UserCategories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');


  const API_BASE = 'https://datingapp-p2d5.onrender.com/api/userCategories';

  useEffect(() => {
  const delayDebounce = setTimeout(() => {
    fetchCategories();
  }, 500); // 500ms delay for debounce

  return () => clearTimeout(delayDebounce); // cleanup
}, [page, searchQuery]);



  const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/getUserCategory`, {
      params: {
        page,
        limit: itemsPerPage,
        search: searchQuery
      }
    });
    setCategories(data.categories);
    setTotalPages(Math.ceil(data.total / itemsPerPage));
  } catch (err) {
    console.error(err);
    alert('Error fetching categories.');
  }
};


  const handleAddCategory = async () => {
    try {
      await axios.post(`${API_BASE}/createUserCategory`, {
        name: categoryName
      });
      setCategoryName('');
      setModalVisible(false);
      fetchCategories();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Failed to add category');
    }
  };

  const handleEdit = async (category) => {
    const newName = prompt('Enter new category name:', category.name);
    if (!newName) return;

    try {
      await axios.put(`${API_BASE}/updateUserCategory/${category._id}`, {
        name: newName
      });
      fetchCategories();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Failed to update category');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      await axios.delete(`${API_BASE}/deleteUserCategory/${id}`);
      fetchCategories();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Failed to delete category');
    }
  };

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between align-items-center">
  <h5 className="mb-0">User Attributes</h5>
  <div className="">
    <CFormInput
  type="text"
  placeholder="Search category"
  value={searchQuery}
  onChange={e => {
    setSearchQuery(e.target.value);
    setPage(1);
  }}
  style={{ minWidth: '400px', height: '40px', marginBottom:'10px' }}
/>

    {/* <CButton color="secondary" onClick={() => fetchCategories()}></CButton> */}
    <CButton color="primary" onClick={() => setModalVisible(true)} style={{marginLeft:"300px"}}>Add Category</CButton>
  </div>
</CCardHeader>


      <CCardBody>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Attributes</strong></TableCell>
                <TableCell><strong>Created Date</strong></TableCell>
                <TableCell><strong>Last Update</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map(category => (
                <TableRow key={category._id}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{new Date(category.createdAt).toLocaleString()}</TableCell>
                  <TableCell>{new Date(category.updatedAt).toLocaleString()}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(category)} color="primary"><Edit /></IconButton>
                    <IconButton onClick={() => handleDelete(category._id)} color="error"><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {categories.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} align="center">No categories found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="d-flex justify-content-end mt-3">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </div>
      </CCardBody>

      <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Add New Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={e => {
            e.preventDefault();
            handleAddCategory();
          }}>
            <CFormInput
              label="Category Name"
              value={categoryName}
              onChange={e => setCategoryName(e.target.value)}
              required
              className="mb-3"
            />
            <CButton type="submit" color="success">Add</CButton>
          </CForm>
        </CModalBody>
      </CModal>
    </CCard>
  );
};

export default UserCategories;
