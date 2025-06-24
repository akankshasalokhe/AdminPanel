import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CBadge, CButton } from '@coreui/react'

const features = {
  Silver: ['Basic Support', '100MB Storage'],
  Golden: ['Priority Support', '1GB Storage'],
  Premium: ['Premium Support', '10GB Storage'],
  VIP: ['24/7 Support', 'Unlimited Storage']
}

const PackageTable = ({ packages }) => {
  return (
    <div className="package-table">
      <CTable striped hover>
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
          {packages.map((pkg, idx) => (
            <CTableRow key={idx}>
              <CTableDataCell>{pkg.name}</CTableDataCell>
              <CTableDataCell>{pkg.price}</CTableDataCell>
              <CTableDataCell>{pkg.subscribers}</CTableDataCell>
              <CTableDataCell>${pkg.revenue}</CTableDataCell>
              <CTableDataCell>
                <CBadge color="success" style={{ backgroundColor: '#1AA01E52', borderRadius: '30px', width: '72px', height: '19px' }}>
                  Active
                </CBadge>
              </CTableDataCell>
              <CTableDataCell>
                <div className="features-box">
                  {features[pkg.name].map((f, i) => (
                    <span key={i} className="feature-pill">{f}</span>
                  ))}
                </div>
              </CTableDataCell>
              <CTableDataCell>
                <CButton color="primary" size="sm">Edit</CButton>{' '}
                <CButton color="danger" size="sm">Delete</CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default PackageTable
