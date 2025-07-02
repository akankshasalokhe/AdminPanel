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
import { Link } from 'react-router-dom';

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
    features: ['Basic Support', 'Limited Access']
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
    features: ['Priority Support', 'Exclusive Content']
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
    features: ['All Access', '1-on-1 Consultation']
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
    features: ['All Premium Features', 'Direct Support Line']
  },
];

const PackageManagement = () => {
  const [visible, setVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    price: '',
    duration: '',
    subscribers: '',
    revenue: '',
    status: ''
  });

  const handleEdit = (pkg) => {
    setEditFormData({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      duration: pkg.duration,
      subscribers: pkg.subscribers,
      revenue: pkg.revenue,
      status: pkg.status
    });
    setEditModalVisible(true);
  };

  const handleEditSubmit = () => {
    console.log('Updated Package Data:', editFormData);
    // TODO: Replace with API call
    setEditModalVisible(false);
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
                <span>
                  <strong>Subscribers:</strong> {pkg.subscribers}
                </span>
                <span className="revenue">
                  <strong>Revenue:</strong> {pkg.revenue}
                </span>
              </div>
              <div className="card-buttons">
                <CButton color="primary" size="sm" className="me-2" onClick={() => handleEdit(pkg)}>
                  Edit
                </CButton>
                <button className="btn" style={{ backgroundColor: '#e74c3c' }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="package-table mt-4">
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
                  <CBadge color="success" style={{ borderRadius: '30px' }}>
                    {pkg.status}
                  </CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  <Link to={`/package-details/${pkg.id}`}>
                    <CButton color="info" size="sm">View Features</CButton>
                  </Link>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="primary" size="sm" className="me-2" onClick={() => handleEdit(pkg)}>Edit</CButton>
                  <CButton color="danger" size="sm">Delete</CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>

      {/* View Features Modal */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <strong>{selectedPackage?.name} Features</strong>
        </CModalHeader>
        <CModalBody>
          {selectedPackage?.features.map((feat, idx) => (
            <div key={idx} className="feature-pill">{feat}</div>
          ))}
        </CModalBody>
      </CModal>

      {/* Edit Modal */}
      <CModal visible={editModalVisible} onClose={() => setEditModalVisible(false)}>
        <CModalHeader onClose={() => setEditModalVisible(false)}>
          <strong>Edit Package</strong>
        </CModalHeader>
        <CModalBody>
          <div className="edit-form">
            <div className="form-group mb-2">
              <label>Package Name</label>
              <input className="form-control" value={editFormData.name} onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })} />
            </div>
            <div className="form-group mb-2">
              <label>Price</label>
              <input className="form-control" value={editFormData.price} onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })} />
            </div>
            <div className="form-group mb-2">
              <label>Duration</label>
              <input className="form-control" value={editFormData.duration} onChange={(e) => setEditFormData({ ...editFormData, duration: e.target.value })} />
            </div>
            <div className="form-group mb-2">
              <label>Subscribers</label>
              <input className="form-control" value={editFormData.subscribers} onChange={(e) => setEditFormData({ ...editFormData, subscribers: e.target.value })} />
            </div>
            <div className="form-group mb-2">
              <label>Revenue</label>
              <input className="form-control" value={editFormData.revenue} onChange={(e) => setEditFormData({ ...editFormData, revenue: e.target.value })} />
            </div>
            <div className="form-group mb-3">
              <label>Status</label>
              <select className="form-control" value={editFormData.status} onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="d-flex justify-content-end">
              <CButton color="secondary" className="me-2" onClick={() => setEditModalVisible(false)}>Cancel</CButton>
              <CButton color="primary" onClick={handleEditSubmit}>Save</CButton>
            </div>
          </div>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default PackageManagement;
