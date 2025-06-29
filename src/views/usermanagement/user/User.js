import React, { useState, useEffect, useMemo } from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CFormSelect,
  CPagination,
  CPaginationItem,
} from '@coreui/react';
// import { FaUsers, FaFemale, FaMale, FaTransgender } from 'react-icons/fa';
import './User.css';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import Gift from './Gift';
import Header from './Header';
import History from './History';
import { FaUsers } from "react-icons/fa";
import { BiFemale } from "react-icons/bi";
import { FaMale } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";


const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ gender: '', role: '', country: '', search: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activePage, setActivePage] = useState('Profile');


  const rowsPerPage = 7;

  useEffect(() => {
    const dummyUsers = Array.from({ length: 35 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      role: ['User'],
      userType:['Normal'],
      coin: (i + 1) * 10,
      status: i % 2 === 0 ? 'Online' : 'Offline',
      uniqueId: `UID${1000 + i}`,
      gender: ['Male', 'Female', 'Other'][i % 3],
      age: 20 + (i % 10),
      country: ['USA', 'Canada', 'UK'][i % 3],
      gallery: 1,
      createdAt: new Date().toLocaleDateString(),
    }));
    setUsers(dummyUsers);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      return (
        (!filters.gender || user.gender === filters.gender) &&
        (!filters.role || user.role === filters.role) &&
        (!filters.country || user.country === filters.country) &&
        (!filters.search || user.name.toLowerCase().includes(filters.search.toLowerCase()))
      );
    });
  }, [users, filters]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredUsers.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const summaryData = [
    { icon:<FaUsers size={25} color='white'/>, title: 'Total Users', count: users.length },
    { icon:<BiFemale  size={30} color='white'/>, title: 'Female', count: users.filter(u => u.gender === 'Female').length },
    { icon:<FaMale  size={30} color='white'/>, title: 'Male', count: users.filter(u => u.gender === 'Male').length },
    { icon:<FaUser  size={25} color='white'/>, title: 'Other', count: users.filter(u => u.gender === 'Other').length },
    { icon:<FaUserShield  size={25} color='white'/>, title: 'Silver', count: users.length },
    { icon:<FaUserShield  size={25} color='white'/>, title: 'Golden', count: users.filter(u => u.gender === 'Female').length },
    { icon:<FaUserShield  size={25} color='white'/>, title: 'Premium', count: users.filter(u => u.gender === 'Male').length },
    { icon:<FaUserShield  size={25} color='white'/>, title: 'VIP', count: users.filter(u => u.gender === 'Other').length },
  
  ];

  if (showProfile && selectedUser) {
  return (
    <div className="p-3">
      <button className="btn btn-secondary mb-2" onClick={() => setShowProfile(false)}>
        ← Back
      </button>

      <Header activePage={activePage} setActivePage={setActivePage} />

      {activePage === 'Profile' && <ProfilePage user={selectedUser} />}
      {activePage === 'History' && <History user={selectedUser} />}
      {activePage === 'Gift' && <Gift user={selectedUser} />}
      {activePage === 'Package' && <div>Package Component (To be implemented)</div>}
      {activePage === 'Coin' && <div>Coin Component (To be implemented)</div>}
      {activePage === 'User Activity' && <div>User Activity Component (To be implemented)</div>}
      {activePage === 'Support' && <div>Support Component (To be implemented)</div>}
    </div>
  );
}


  return (
    <div className="p-2 user-management-container">
      <h5 className="mb-4 user-management-title">User Management</h5>

      <CRow className="mb-4">
        {summaryData.map((item, index) => (
          <CCol key={index} xs="auto">
            <CCard className="mb-3 shadow-sm user-summary-card">
              <CCardBody className="text-center p-2">
                <div className='d-flex justify-content-between align-items-center mt-2'>
                  <div>
                    <div className="" style={{color:"#888589",fontSize:"18px"}}>{item.title}</div>
                    <div style={{fontSize:"20px",fontWeight:"700"}}>{item.count}</div>
                  </div>
                <div className="user-summary-icon mb-1">{item.icon}</div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <Card className=''>

        <CRow className="d-flex mt-4 mb-4 ms-3 filters-container">
  <CCol xs="auto" className='mb-2'>
    <CFormInput
      size="sm"
      type="text"
      placeholder="Search by name"
      value={filters.search}
      onChange={e => setFilters({ ...filters, search: e.target.value })}
    />
  </CCol>

  <CCol xs="auto">
    <CFormSelect
      size="sm"
      value={filters.gender}
      onChange={e => setFilters({ ...filters, gender: e.target.value })}
    >
      <option value="">Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </CFormSelect>
  </CCol>

  <CCol xs="auto">
    <CFormSelect
      size="sm"
      value={filters.role}
      onChange={e => setFilters({ ...filters, role: e.target.value })}
    >
      <option value="">Role</option>
      <option value="User">User</option>
      <option value="Admin">Admin</option>
    </CFormSelect>
  </CCol>

  <CCol xs="auto">
    <CFormSelect
      size="sm"
      value={filters.country}
      onChange={e => setFilters({ ...filters, country: e.target.value })}
    >
      <option value="">Country</option>
      <option value="USA">USA</option>
      <option value="Canada">Canada</option>
      <option value="UK">UK</option>
    </CFormSelect>
  </CCol>
</CRow>

      <div className="table-wrapper mb-3">
        <CTable responsive className="user-table compact-table">
          <CTableHead>
            <CTableRow>
              <CTableDataCell><input type="checkbox" className="custom-checkbox" /></CTableDataCell>
              <CTableHeaderCell className=''>USER</CTableHeaderCell>
              <CTableHeaderCell>ROLE</CTableHeaderCell>
              <CTableHeaderCell>USER TYPE</CTableHeaderCell>
              <CTableHeaderCell>COIN</CTableHeaderCell>
              <CTableHeaderCell>STATUS</CTableHeaderCell>
              <CTableHeaderCell>UNIQUEID</CTableHeaderCell>
              <CTableHeaderCell>GENDER</CTableHeaderCell>
              <CTableHeaderCell>AGE</CTableHeaderCell>
              <CTableHeaderCell>COUNTRY</CTableHeaderCell>
              <CTableHeaderCell>GALLERY</CTableHeaderCell>
              <CTableHeaderCell>CREATED AT</CTableHeaderCell>
              <CTableHeaderCell>ACTION</CTableHeaderCell>

            </CTableRow>
          </CTableHead>
          <CTableBody className='ms-5'>
            {paginatedUsers.map(user => (
              <CTableRow key={user.id}>
                <CTableDataCell>  <input type="checkbox" className="custom-checkbox" /></CTableDataCell>
                <CTableDataCell>
                  <div className="d-flex align-items-center ms-3">
                    <img
                      src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg"
                      alt="profile"
                      className="user-profile-pic me-2"
                    />
                    <div>
                      <div className="fw-bold">{user.name}</div>
                      <div className="text-muted" style={{ fontSize: '12px' }}>{user.uniqueId}</div>
                    </div>
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <span className="role-badge">{user.role}</span>
                </CTableDataCell>
                <CTableDataCell>
                  <span className="user-type-badge">{user.userType}</span>
                </CTableDataCell>
                <CTableDataCell>{user.coin}</CTableDataCell>
                <CTableDataCell>
                  <span className="status-badge">{user.status}</span>
                </CTableDataCell>
                <CTableDataCell>{user.uniqueId}</CTableDataCell>
                <CTableDataCell>{user.gender}</CTableDataCell>
                <CTableDataCell>{user.age}</CTableDataCell>
                <CTableDataCell>{user.country}</CTableDataCell>
                <CTableDataCell>{user.gallery}</CTableDataCell>
                <CTableDataCell>{user.createdAt}</CTableDataCell>
                <button
                    className="btn btn-sm btn-warning me-1"
                    onClick={() => {
                      setSelectedUser(user);
                      setShowProfile(true);
                      setActivePage('Profile');
                    }}
                  >
                    View
                </button>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>

      <CPagination align="center" aria-label="User pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <CPaginationItem
            key={i + 1}
            active={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </CPaginationItem>
        ))}
      </CPagination>
      </Card>

      
    </div>
  );
};

export default UserManagement;
