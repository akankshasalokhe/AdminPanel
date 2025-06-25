import {React,useState} from 'react'
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CButton,
  CFormInput,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CBadge
} from '@coreui/react'
import { FaRegCalendar } from "react-icons/fa6";
import { FaEye,FaTrash ,FaEdit } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

import './Event.css'
import { useNavigate } from 'react-router-dom'


const summaryCards = [
  { title: 'Total Events', count: 120, icon: <FaRegCalendar color='white' size={35}/> },
  { title: 'Active Events', count: 87, icon: <FaEye color='white' size={35}/> },
  { title: 'Total Attendance', count: 3500, icon: <HiUsers color='white' size={35}/> },
  { title: 'Revenue', count: '$15,000', icon: <HiOutlineCurrencyRupee color='white' size={35}/> },
]

const eventData = [
  {
    name: 'Rooftop Wine Tasting',
    place: 'Pune',
    category: 'Dining',
    dateTime: '2025-07-10 09:00 PM',
    attendance: 450,
    coupon: '2000',
    status: 'Completed',
  },
  {
    name: 'Wet & Joy',
    place: 'Pune',
    category: 'Adeventure',
    dateTime: '2025-07-20 06:00 AM',
    attendance: 210,
    coupon: '1000',
    status: 'Active',
  },
]


const Event = () => {

  const navigate = useNavigate()

  const handleView = (event) => {
    navigate(`/eventInfo/${encodeURIComponent(event.name)}`, { state: { event } })
  }

  return (
    <>
    <div style={{ padding: '' }}>
            <h2 className='mb-4'>Event Management</h2>
      <CRow className="mb-4">
        {summaryCards.map((card, index) => (
          <CCol key={index} xs="12" sm="6" md="3">
            <CCard className="summary-card">
              <CCardBody className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="summary-title">{card.title}</div>
                  <div className="summary-count">{card.count}</div>
                </div>
                <div className="summary-icon" style={{ backgroundColor:"#9747FF",padding:'2px',borderRadius:"5px"}}>{card.icon}</div>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <CCard className="main-card">
        <CCardBody>
          <div className="d-flex justify-content-end mb-3 gap-2">
            <CFormInput type="text" placeholder="Search events..." style={{ maxWidth: '300px' }} />
            <CButton color="primary">Add Event</CButton>
          </div>

          <CTable responsive hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Event</CTableHeaderCell>
                <CTableHeaderCell>Location</CTableHeaderCell>
                <CTableHeaderCell>Category</CTableHeaderCell>
                <CTableHeaderCell>Date & Time</CTableHeaderCell>
                <CTableHeaderCell>Attendance</CTableHeaderCell>
                <CTableHeaderCell>Coupon</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody  style={{textAlign:"inherit"}}>
              {eventData.map((event, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>
                    <strong>{event.name}</strong>
                  </CTableDataCell>
                  <CTableDataCell>{event.place}</CTableDataCell>
                  <CTableDataCell>
                    <span className="category-badge">{event.category}</span>
                  </CTableDataCell>
                  <CTableDataCell>{event.dateTime}</CTableDataCell>
                  <CTableDataCell>{event.attendance}</CTableDataCell>
                  <CTableDataCell>{event.coupon}</CTableDataCell>
                  <CTableDataCell>
                    <span
                      className={`status-badge ${
                        event.status.toLowerCase()
                      }`}
                    >
                      {event.status}
                    </span>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-2">
                    <FaEye
                        className="action-icon view"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleView(event)}
                        />
                      {event.status !== 'Completed' && <FaEdit className="action-icon edit" />}
                      <FaTrash className="action-icon delete" />
                    </div>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
   
    </>
  )
}

export default Event
