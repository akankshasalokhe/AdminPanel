// src/pages/EditPackagePage.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CButton,
  CFormCheck,
  CContainer,
  CCard,
} from '@coreui/react'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import './EditPackage.css'
import { mockPackages } from './mockData'

const allFeatures = [
  'Unlimited Chats',
  'Boost Profile',
  'See Who Viewed You',
  'Verified Badge',
  'Priority Support',
  'Access VIP Events',
  'Exclusive Content',
  'Ad-Free Experience',
  'Rewind Last Swipe',
  'Profile Insights',
  'Daily Super Likes',
  'Advanced Filters',
  'Travel Mode',
]

const EditPackagePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [packageData, setPackageData] = useState(null)
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectAll, setSelectAll] = useState(false)

  useEffect(() => {
    const pkg = mockPackages.find((p) => p.id === parseInt(id))
    setPackageData(pkg)
    setSelectedFeatures(pkg?.features || [])
  }, [id])

  const handleToggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    )
  }

  const handleSave = () => {
    const updatedData = {
      ...packageData,
      features: selectedFeatures,
    }
    console.log('Saved:', updatedData)
    // TODO: Replace with API call
  }

  const handleSelectAll = () => {
    const isAllSelected = selectedFeatures.length === allFeatures.length
    setSelectAll(!isAllSelected)
    setSelectedFeatures(!isAllSelected ? [...allFeatures] : [])
  }

  const filteredFeatures = allFeatures.filter((feat) =>
    feat.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (!packageData) return <div className="loading-text">Loading...</div>

  return (
    <CContainer className="edit-package-container">
      <CCard className="edit-package-card">
      <div className="edit-package-page">
        <div className="top-nav">
          <CButton color="light" onClick={() => navigate(-1)} className="back-btn m-2">
            <FaArrowLeft className="me-2" /> Back
          </CButton>
        </div>

        <div className="package-container">
          <p className="subtext text-center mb-3">
            Select the features included in this package.
          </p>

          <div className="search-row">
            <CFormCheck
              id="selectAll"
              label="Select All"
              checked={selectedFeatures.length === allFeatures.length}
              onChange={handleSelectAll}
            />
            <div className="floating-search">
              <FaSearch className="search-icon" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
                placeholder=" "
              />
              <label>Search Features</label>
            </div>
          </div>

          <div className="feature-grid">
            {filteredFeatures.map((feat, index) => (
              <div key={index} className="feature-grid-item">
                <CFormCheck
                  id={`feat-${index}`}
                  label={feat}
                  checked={selectedFeatures.includes(feat)}
                  onChange={() => handleToggleFeature(feat)}
                />
              </div>
            ))}
          </div>

          <div className="action-footer">
            <CButton color="primary" size="lg" onClick={handleSave}>
              Save Changes
            </CButton>
          </div>
        </div>
      </div>
      </CCard>
    </CContainer>
  )
}

export default EditPackagePage
