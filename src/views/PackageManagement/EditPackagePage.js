import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CButton,
  CFormCheck,
  CContainer,
} from '@coreui/react'
import {
  FaCrown,
  FaArrowLeft,
  FaSearch,
  FaStar,
  FaGem,
  FaMedal,
} from 'react-icons/fa'
import './EditPackage.css'

const allFeatures = [
  'Unlimited Chats',
  'Boost Profile',
  'See Who Viewed You',
  'Verified Badge',
  'Priority Support',
  'Access VIP Events',
  'Exclusive Content',
]

const mockPackages = [
  {
    id: 1,
    name: 'Silver',
    features: ['Unlimited Chats', 'Boost Profile'],
  },
  {
    id: 2,
    name: 'Golden',
    features: ['Unlimited Chats', 'Boost Profile', 'See Who Viewed You'],
  },
  {
    id: 3,
    name: 'Premium',
    features: [
      'Unlimited Chats',
      'Boost Profile',
      'See Who Viewed You',
      'Priority Support',
    ],
  },
  {
    id: 4,
    name: 'VIP',
    features: [
      'Unlimited Chats',
      'Boost Profile',
      'See Who Viewed You',
      'Verified Badge',
      'Priority Support',
      'Access VIP Events',
    ],
  },
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
  }

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    setSelectedFeatures(!selectAll ? [...allFeatures] : [])
  }

  const filteredFeatures = allFeatures.filter((feat) =>
    feat.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (!packageData) return <div className="loading-text">Loading...</div>

  return (
    <CContainer className='edit-package-container'>
      <div className={`edit-package-page ${packageData.name.toLowerCase()}`}>
        <div className="top-nav">
        <CButton color="light" onClick={() => navigate(-1)} className="back-btn m-2">
          <FaArrowLeft className="me-2" /> Back
        </CButton>
      </div>

      <div className="package-container">
        <div className="package-header">
          <div className="package-title">
            {packageData.name === 'Silver' && <FaMedal className="crown-icon" />}
            {packageData.name === 'Golden' && <FaStar className="crown-icon" />}
            {packageData.name === 'Premium' && <FaGem className="crown-icon" />}
            {packageData.name === 'VIP' && <FaCrown className="crown-icon" />}
            <span className="title-text">{packageData.name} Package</span>
          </div>
          <p className="subtext">
            Select features to include in <strong>{packageData.name}</strong> package.
          </p>
        </div>

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

        <div className="feature-checklist">
          {filteredFeatures.map((feat, index) => (
            <div key={index} className="feature-item">
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
    </CContainer>
  )
}

export default EditPackagePage
