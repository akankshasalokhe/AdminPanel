import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  CCard, CCardBody, CCardHeader, CCol, CRow, CFormInput, CFormSelect,
  CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell,
  CButton
} from '@coreui/react'
import { IoWallet } from 'react-icons/io5'
import { FaRegHeart, FaMoneyBillWave } from 'react-icons/fa'
import './EventInfo.css'

const EventInfoPage = () => {
  const { eventId } = useParams()
  const navigate = useNavigate()

  const [eventData] = useState({
    name: 'Valentine Gala',
    location: 'Mumbai, India',
    attendance: [
      {
        id: 1,
        attendee: { name: 'Priya Singh', age: 26, image: "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg" },
        partner: { name: 'Amit Joshi', email: 'amit@example.com' },
        contact: { phone: '+91-9876543210', email: 'priya@gmail.com' },
        status: 'Paid',
        registration: '2025-06-10 14:22',
        payment: { amount: '500', transaction: 'TX232435345' },
      },
      {
        id: 2,
        attendee: { name: 'Neha Verma', age: 24, image: "https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_1280.jpg" },
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
    <div className="event-info-container">
      <CButton color="light" className="mb-3" onClick={() => navigate(-1)}>
        ← Back
      </CButton>

      <h3 className="mb-0">{eventData.name}</h3>
      <p className="text-muted">{eventData.location}</p>

      <CRow className="g-3 mb-4">
        <CCol xs={12} sm={6} lg={4}>
          <CCard className="summary-card">
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-label">Total Interested</h6>
                <h3>{eventData.stats.totalInterested}</h3>
              </div>
              <div className="icon-box heart">
                <FaRegHeart size={30} color="white" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} sm={6} lg={4}>
          <CCard className="summary-card">
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-label">Total Paid</h6>
                <h3>{eventData.stats.totalPaid}</h3>
              </div>
              <div className="icon-box wallet">
                <IoWallet size={30} color="white" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} sm={6} lg={4}>
          <CCard className="summary-card">
            <CCardBody className="d-flex justify-content-between align-items-center">
              <div>
                <h6 className="text-label">Total Revenue</h6>
                <h3>₹{eventData.stats.totalRevenue}</h3>
              </div>
              <div className="icon-box revenue">
                <FaMoneyBillWave size={30} color="white" />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CCard className="attendance-card">
        <CCardHeader className="d-flex flex-column flex-md-row justify-content-between gap-2 align-items-start align-items-md-center">
          <h5>Event Attendance</h5>
          <div className="d-flex flex-wrap gap-2">
            <CFormInput
              size="sm"
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <CFormSelect
              size="sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Interested">Interested</option>
            </CFormSelect>
          </div>
        </CCardHeader>

        <CCardBody style={{ overflowX: 'auto' }}>
          <CTable responsive hover>
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
                      <img
                        src={entry.attendee.image}
                        alt={entry.attendee.name}
                        width={50}
                        height={50}
                        className="rounded-circle object-fit-cover"
                      />
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
                    <span className={`status-badge ${entry.status.toLowerCase()}`}>
                      {entry.status}
                    </span>
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
