import React, { useState } from 'react';
import './Package.css';
import { FaCrown, FaGem, FaMedal, FaStar } from 'react-icons/fa';
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CBadge,
  CButton,
  CModal,
  CModalHeader,
  CModalBody
} from '@coreui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';


const packages = [
  {
    id: 1,
    name: 'Silver',
    type: 'silver',
    icon: <FaMedal color='#00001A96' />,
    status: 'Active',
    price: '₹ 100',
    duration: '1 Month',
    subscribers: 150,
    revenue: '₹ 15,000',
  },
  {
    id: 2,
    name: 'Golden',
    type: 'golden',
    icon: <FaStar color='#D0C304' />,
    status: 'Active',
    price: '₹ 250',
    duration: '1 Month',
    subscribers: 100,
    revenue: '₹ 25,000',
  },
  {
    id: 3,
    name: 'Premium',
    type: 'premium',
    icon: <FaGem color='#8979FF' />,
    status: 'Active',
    price: '₹ 500',
    duration: '1 Month',
    subscribers: 60,
    revenue: '₹ 30,000',
  },
  {
    id: 4,
    name: 'VIP',
    type: 'vip',
    icon: <FaCrown color='#F00000BA' />,
    status: 'Active',
    price: '₹ 1000',
    duration: '1 Month',
    subscribers: 40,
    revenue: '₹ 40,000',
  },
];

const PackageManagement = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editForm, setEditForm] = useState({
    id: '',
    name: '',
    price: '',
    duration: '',
    subscribers: '',
    revenue: '',
    status: '',
  });

  const navigate = useNavigate();

  const handleEdit = (pkg) => {
    navigate(`/edit-package/${pkg.id}`);
  };

  const handleTableEdit = (pkg) => {
    setEditForm({ ...pkg });
    setEditModalVisible(true);
  };

  return (
    <div className="package-management">
      <h2 className="title">Package Management</h2>

      {/* Cards */}
      <div className="card-container">
        {packages.map((pkg) => (
          <div className={`package-card ${pkg.type}`} key={pkg.id}>
            <div className="package-top">
              <div className="package-name">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px' }}>
                  {pkg.icon}
                  {pkg.name}
                </div>
                <span className="status-pill">{pkg.status}</span>
              </div>
              <div className="price">{pkg.price}</div>
              <div className="duration">{pkg.duration}</div>
            </div>

            <div className="package-bottom">
              <div className="metrics">
                <span><strong>Subscribers:</strong> {pkg.subscribers}</span>
                <span className="revenue"><strong>Revenue:</strong> {pkg.revenue}</span>
              </div>
              <div className="card-buttons">
                <CButton color="primary" size="sm" className="me-2" onClick={() => handleEdit(pkg)}>Edit</CButton>
                <button className="btn" style={{ backgroundColor: '#e74c3c' }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="package-table">
        <CTable hover responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Package</CTableHeaderCell>
              <CTableHeaderCell>Price</CTableHeaderCell>
              <CTableHeaderCell>Subscribers</CTableHeaderCell>
              <CTableHeaderCell>Revenue</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
              <CTableHeaderCell>Features</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {packages.map((pkg) => (
              <CTableRow key={pkg.id}>
                <CTableDataCell>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {pkg.icon} {pkg.name}
                  </div>
                </CTableDataCell>
                <CTableDataCell>{pkg.price}</CTableDataCell>
                <CTableDataCell>{pkg.subscribers}</CTableDataCell>
                <CTableDataCell style={{ color: 'green' }}>{pkg.revenue}</CTableDataCell>
                <CTableDataCell>
                  <CBadge  style={{ borderRadius: '30px',backgroundColor: "#1AA01E52" }}>{pkg.status}</CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  <Link to={`/package-details/${pkg.id}`}>
                    <CButton color="white" size="sm">View Features</CButton>
                  </Link>
                </CTableDataCell>
                <CTableDataCell>
                    <CButton
                      color="primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleTableEdit(pkg)}
                    >
                      <FaEdit className="me-1" />
                    </CButton>
                    <CButton color="danger" size="sm">
                      <FaTrash className="me-1" />
                    </CButton>
                  </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>

      {/* Feature Modal */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <strong>{selectedPackage?.name} Features</strong>
        </CModalHeader>
        <CModalBody>
          {selectedPackage?.features?.map((feat, idx) => (
            <div key={idx} className="feature-pill">{feat}</div>
          ))}
        </CModalBody>
      </CModal>

      {/* Edit Modal */}
      <CModal visible={editModalVisible} onClose={() => setEditModalVisible(false)}>
        <CModalHeader onClose={() => setEditModalVisible(false)}>
          <strong>Edit Package: {editForm.name}</strong>
        </CModalHeader>
        <CModalBody>
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                value={editForm.price}
                onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label>Duration</label>
              <input
                type="text"
                className="form-control"
                value={editForm.duration}
                onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label>Subscribers</label>
              <input
                type="number"
                className="form-control"
                value={editForm.subscribers}
                onChange={(e) => setEditForm({ ...editForm, subscribers: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label>Revenue</label>
              <input
                type="text"
                className="form-control"
                value={editForm.revenue}
                onChange={(e) => setEditForm({ ...editForm, revenue: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label>Status</label>
              <select
                className="form-control"
                value={editForm.status}
                onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="d-flex justify-content-end">
              <CButton color="secondary" className="me-2" onClick={() => setEditModalVisible(false)}>
                Cancel
              </CButton>
              <CButton
                color="success"
                onClick={() => {
                  console.log('Updated Package Data:', editForm);
                  setEditModalVisible(false);
                }}
              >
                Save
              </CButton>
            </div>
          </form>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default PackageManagement;
