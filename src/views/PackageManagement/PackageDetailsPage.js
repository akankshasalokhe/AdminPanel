import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mockPackages } from './mockData'
import { CCard, CCardBody, CCardHeader, CListGroup, CListGroupItem, CButton } from '@coreui/react'
import { FaArrowLeft } from 'react-icons/fa'

const PackageDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const packageData = mockPackages.find(pkg => pkg.id === parseInt(id))

  if (!packageData) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Package not found.</div>
  }

  return (
    <>
    {/* Back Button */}
      <div style={{ position: 'absolute', left: '10', }}>
        <CButton
          color="secondary"
          variant="outline"
          size="sm"
          onClick={() => navigate(-1)}
          style={{ borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <FaArrowLeft />
          Back
        </CButton>
      </div>
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', position: 'relative' }}>
      

      <CCard className="shadow-sm" style={{ borderRadius: '12px' }}>
        <CCardHeader className="bg-primary text-white" style={{ fontSize: '1.2rem' }}>
          <strong>{packageData.name} Package Features</strong>
        </CCardHeader>
        <CCardBody>
          <CListGroup flush>
            {packageData.features.map((feature, index) => (
              <CListGroupItem key={index}>{feature}</CListGroupItem>
            ))}
          </CListGroup>
        </CCardBody>
      </CCard>
    </div>
    </>
  )
}

export default PackageDetailsPage
