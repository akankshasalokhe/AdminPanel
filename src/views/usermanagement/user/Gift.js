import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CModal,
  CModalBody,
  CModalHeader,
  CButton
} from '@coreui/react';
import './Gift.css';
import { Container } from '@mui/material';
import { FaGift, FaRegHeart } from 'react-icons/fa6';

const stats = [
  {
    title: "Total Gift Sent",
    count: 120,
    coin: 500,
    icon: <FaGift size={25} color='#4157FBE3' />,
  },
  {
    title: "Total Gift Received",
    count: 95,
    coin: 420,
    icon: <FaGift size={25} color='#4157FBE3' />,
  },
  {
    title: "Like Gift",
    count: 70,
    coin: 380,
    icon: <FaRegHeart size={25} color='#E440DC8A' />,
  },
];

const topGifts = [
  { name: 'Rose', category: 'Romantic', sent: 120, received: 95 },
  { name: 'Heart Box', category: 'Luxury', sent: 85, received: 72 },
  { name: 'Bear', category: 'Soft and Cute', sent: 98, received: 90 },
];

const giftData = {
  send: [
    { name: 'Rose', category: 'Romantic', to: 'Alice', coin: 50, date: '2025-06-18' },
    { name: 'Ring', category: 'Luxury', to: 'Maria', coin: 80, date: '2025-06-16' },
    { name: 'Rose', category: 'Romantic', to: 'Alice', coin: 50, date: '2025-06-18' },

  ],
  receive: [
    { name: 'Teddy', category: 'Soft', to: 'You', coin: 100, date: '2025-06-17' },
    { name: 'Watch', category: 'Luxury', to: 'You', coin: 200, date: '2025-06-15' }
  ],
  like: [
    { name: 'Ring', category: 'Luxury', coin: 300, date: '2025-06-16' },
    { name: 'Heart', category: 'Romantic', coin: 100, date: '2025-06-14' }
  ],
};

const renderGiftBox = (gift, index) => (
  <CCard key={index} className="gift-box mb-3 fade-in">
    <CCardBody className="p-2">
      <div className="d-flex justify-content-between">
        <div className="gift-name">{gift.name}</div>
        <div className="category-name">{gift.category}</div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="to-name">To: {gift.to || 'You'}</div>
        <div className="coin">{gift.coin} coins</div>
      </div>
      <div className="send-date">{gift.date}</div>
    </CCardBody>
  </CCard>
);

const Gift = () => {
  const [visibleModal, setVisibleModal] = useState(null); // 'send', 'receive', 'like' or null

  const openModal = (type) => setVisibleModal(type);
  const closeModal = () => setVisibleModal(null);

  return (
    <Container fluid>
      {/* Stat Cards */}
      <CRow className="mb-4 g-3">
        {stats.map((item, idx) => (
          <CCol key={idx} xs={12} sm={6} md={4}>
            <CCard className="stat-card p-3 h-100">
              <CCardBody className="d-flex justify-content-between align-items-center">
                <div style={{ marginTop: "-10px" }}>
                  <div className="stat-title text-muted">{item.title}</div>
                  <div className="stat-count fw-bold fs-4">{item.count}</div>
                  <div className="stat-coin text-primary">{item.coin} coins</div>
                </div>
                <div className="stat-icon-box">{item.icon}</div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      {/* Top Gifts Table */}
      <CCard className="top-gift-card mb-4">
        <CCardBody>
          <h5 className="mb-4 fw-bold">Top Performing Gifts</h5>
          <CTable responsive borderless>
            <CTableHead>
              <CTableRow className="text-center">
                <CTableHeaderCell>Gift Name</CTableHeaderCell>
                <CTableHeaderCell>Category</CTableHeaderCell>
                <CTableHeaderCell>Sent</CTableHeaderCell>
                <CTableHeaderCell>Received</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody className="text-center">
              {topGifts.map((gift, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{gift.name}</CTableDataCell>
                  <CTableDataCell>
                    <span className="category-badge">{gift.category}</span>
                  </CTableDataCell>
                  <CTableDataCell>{gift.sent}</CTableDataCell>
                  <CTableDataCell>{gift.received}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

      {/* Gift Sections */}
      <CRow className="g-4">
        {['send', 'receive', 'like'].map((type) => (
          <CCol xs={12} md={4} key={type}>
            <h5 className='text-center text-capitalize'>{type} Gift</h5>
            {giftData[type].slice(0, 2).map((gift, index) => renderGiftBox(gift, index))}
            {giftData[type].length > 2 && (
              <div className='text-center'>
                <CButton color="primary" variant="outline" onClick={() => openModal(type)}>
                  See More
                </CButton>
              </div>
            )}
          </CCol>
        ))}
      </CRow>

      {/* Modal */}
      <CModal visible={!!visibleModal} fullscreen onClose={closeModal}>
        <CModalHeader closeButton>
          <h5 className='fw-bold text-capitalize mb-0'>{visibleModal} Gift List</h5>
        </CModalHeader>
        <CModalBody className="c-modal-body">
          <CRow className="g-3">
            {visibleModal && giftData[visibleModal].map((gift, index) => (
              <CCol xs={12} sm={6} md={4} key={index}>
                {renderGiftBox(gift, index)}
              </CCol>
            ))}
          </CRow>
        </CModalBody>
      </CModal>
    </Container>
  );
};

export default Gift;
