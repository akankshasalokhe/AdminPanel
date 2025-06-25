import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CFormInput, CFormSelect, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CAvatar, CButton } from '@coreui/react'
import { IoWallet } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";


const EventInfoPage = () => {
  const { eventId } = useParams()
  const navigate = useNavigate()

  const [eventData, setEventData] = useState({
    name: 'Valentine Gala',
    location: 'Mumbai, India',
    attendance: [
      {
        id: 1,
        attendee: { name: 'Priya Singh', age: 26, image:"https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg" },
        partner: { name: 'Amit Joshi', email: 'amit@example.com' },
        contact: { phone: '+91-9876543210', email: 'priya@gmail.com' },
        status: 'Paid',
        registration: '2025-06-10 14:22',
        payment: { amount: '500', transaction: 'TX232435345' },
      },
      {
        id: 2,
        attendee: { name: 'Neha Verma', age: 24, image:"https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg"},
        partner: { name: 'Rahul Jain', email: 'rahul@example.com' },
        contact: { phone: '+91-9123456780', email: 'neha@gmail.com' },
        status: 'Interested',
        registration: '2025-06-09 17:40',
        payment: { amount: '0', transaction: 'TX57546747456' },
      },
    ],
    stats: {
      totalInterested: 150,
      totalPaid: 45000,
      totalRevenue: 170,
    },
  })

  const [statusFilter, setStatusFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = eventData.attendance.filter((entry) => {
    const matchesStatus = statusFilter === 'All' || entry.status === statusFilter
    const matchesSearch =
      entry.attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.partner.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <div className="">
      <CButton color="light" className="mb-1" onClick={() => navigate(-1)}>
        ← Back
      </CButton>

      <h3>{eventData.name}</h3>
      <p className="text-muted">{eventData.location}</p>

      {/* Top 3 Summary Cards */}
      <CRow className="mb-4">
        <CCol xs={12} md={4}>
          <CCard style={{ border: '1px solid #ccc', width: '337.36px', height: '128px' }}>
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h6 style={{color:"#00001A9C"}}>Total Interested</h6>
                <h3>{eventData.stats.totalInterested}</h3>
              </div>
              <div style={{ backgroundColor:"#FFBE4D",padding:'5px',borderRadius:"5px"}}>
                  <FaRegHeart size={40} color='white' />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={4}>
          <CCard style={{ border: '1px solid #ccc', width: '337.36px', height: '128px' }}>
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h6 style={{color:"#00001A9C"}}>Total Paid</h6>
                <h3>{eventData.stats.totalPaid}</h3>
              </div>
              <div style={{ backgroundColor:"#1AA01E",padding:'5px',borderRadius:"5px"}}>
                  <IoWallet size={40} color='white' />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={4}>
          <CCard style={{ border: '1px solid #ccc', width: '337.36px', height: '128px' }}>
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h6 style={{color:"#00001A9C"}}>Total Revenue</h6>
                <h3>₹{eventData.stats.totalRevenue}</h3>
              </div>
              <div style={{ backgroundColor:"#3CC3DF",padding:'5px',borderRadius:"5px"}}>
                  <FaMoneyBillWave size={40} color='white' />
              </div>            
              </CCardBody>
          </CCard>
        </CCol>
        
      </CRow>

      {/* Attendance Section */}
      <CCard style={{ border: '1px solid #ccc', borderRadius: '10px', height: '713px' }}>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h5>Event Attendance</h5>
          <div className="d-flex gap-2">
            <CFormInput
              size="sm"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <CFormSelect
              size="sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Paid</option>
              <option>Interested</option>
            </CFormSelect>
          </div>
        </CCardHeader>
        <CCardBody style={{ overflowY: 'auto' }}>
          <CTable responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Attendee Info</CTableHeaderCell>
                <CTableHeaderCell>Partner Info</CTableHeaderCell>
                <CTableHeaderCell>Contact</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Registration</CTableHeaderCell>
                <CTableHeaderCell>Payment</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredData.map((entry) => (
                <CTableRow key={entry.id}>
                  <CTableDataCell>
                    <div className="d-flex align-items-center gap-2">
                      <img src={entry.attendee.image} size="md" width={50} height={50} style={{borderRadius:"50%",objectFit:"cover"}}/>
                      <div>
                        <div>{entry.attendee.name}</div>
                        <small>Age: {entry.attendee.age}</small>
                      </div>
                    </div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{entry.partner.name}</div>
                    <small>{entry.partner.email}</small>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{entry.contact.phone}</div>
                    <small>{entry.contact.email}</small>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="success"
                      size="sm"
                      className="px-3"
                      style={{ borderRadius: '10px', backgroundColor: '#00990517', color: '#000' }}
                    >
                      {entry.status}
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>{entry.registration}</CTableDataCell>
                  <CTableDataCell>
                    ₹{entry.payment.amount}
                    <br />
                    <small>{entry.payment.transaction}</small>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default EventInfoPage
