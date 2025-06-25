import React from 'react';
import { CCard, CCardBody, CRow, CCol, CTable, CTableBody, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell, CBadge } from '@coreui/react';
import './Gift.css';
import { Container } from '@mui/material';
import CIcon from '@coreui/icons-react';
import { FaGift } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


const stats = [
  {
    title: "Total Gift Sent",
    count: 120,
    coin: 500,
    icon: <FaGift size={25} color='#4157FBE3'/>,
  },
  {
    title: "Total Gift Received",
    count: 95,
    coin: 420,
    icon:<FaGift size={25} color='#4157FBE3'/>,
  },
  {
    title: "Like Gift",
    count: 70,
    coin: 380,
    icon: <FaRegHeart size={25} color='#E440DC8A'/>,
  },
];
const topGifts = [
  { name: 'Rose', category: 'Romantic', sent: 120, received: 95 },
  { name: 'Heart Box', category: 'Luxury', sent: 85, received: 72 },
  { name: 'Bear', category: 'Soft and Cute', sent: 98, received: 90 },
  { name: 'Rose', category: 'Romantic', sent: 120, received: 95 },
  { name: 'Heart Box', category: 'Luxury', sent: 85, received: 72 },
];


const Gift = () => {
  const giftData = {
   
     send: [
      { name: 'Rose', category: 'Romantic', to: 'Alice', coin: 50, date: '2025-06-18' },
    ],
    receive: [
      { name: 'Teddy', category: 'Soft', to: 'You', coin: 100, date: '2025-06-17' },
    ],
    like: [
      { name: 'Ring', category: 'Luxury', coin: 300, date: '2025-06-16' },
    ],
  }

  const renderGiftBox = (gift) => (
    <CCard className="gift-box mb-3">
      <CCardBody className="p-2">
        <div className="d-flex justify-content-between">
          <div className="gift-name">{gift.name}</div>
          <div className="category-name">{gift.category}</div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="to-name">To: {gift.to}</div>
          <div className="coin">{gift.coin} coins</div>
        </div>
        <div className="send-date">{gift.date}</div>
      </CCardBody>
    </CCard>
  )
  return (
    <Container fluid>

    <CRow className="">
      <div className='d-flex justify-content-between align-items-center g-1'>
      {stats.map((item, idx) => (
        <CCol key={idx} xs={12} sm={6} md={4}>
          <CCard className="stat-card p-3">
            <CCardBody className="d-flex justify-content-between align-items-center g-1">
              <div style={{marginTop:"-10px"}}>
                <div className="stat-title text-muted">{item.title}</div>
                <div className="stat-count fw-bold fs-4">{item.count}</div>
                <div className="stat-coin text-primary">{item.coin} coins</div>
              </div>
              <div className="stat-icon-box">{item.icon}</div>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
      </div>

       <CCard className="top-gift-card">
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

      <CRow className="justify-content-between align-items-center g-1" >
      <CCol md={4}>
        <h5 className='text-center'>Send Gift</h5>
        <div>
        {giftData.send.map((gift, index) => (
          <React.Fragment key={index}>{renderGiftBox(gift)}</React.Fragment>
        ))}
        </div>
         <div>
        {giftData.send.map((gift, index) => (
          <React.Fragment key={index}>{renderGiftBox(gift)}</React.Fragment>
        ))}
        </div>
      </CCol>

      <CCol md={4}>
        <h5 className='text-center'>Recieved Gift</h5>
        <div>
        {giftData.send.map((gift, index) => (
          <React.Fragment key={index}>{renderGiftBox(gift)}</React.Fragment>
        ))}
        </div>
         <div>
        {giftData.send.map((gift, index) => (
          <React.Fragment key={index}>{renderGiftBox(gift)}</React.Fragment>
        ))}
        </div>
      </CCol>


      <CCol md={4}>
        <h5 className='text-center'>Like Gift</h5>
        <div>
        {giftData.send.map((gift, index) => (
          <React.Fragment key={index}>{renderGiftBox(gift)}</React.Fragment>
        ))}
        </div>
         <div>
        {giftData.send.map((gift, index) => (
          <React.Fragment key={index}>{renderGiftBox(gift)}</React.Fragment>
        ))}
        </div>
      </CCol>

    </CRow>
  


    </CRow>
    </Container>

   
  );
};

export default Gift;
