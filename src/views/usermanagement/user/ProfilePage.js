import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react';
import './ProfilePage.css';

const SectionCard = ({ title, children }) => (
  <CCard className="info-card mb-3">
    <CCardBody>
      <h5>{title}</h5>
      {children}
    </CCardBody>
  </CCard>
);

const InfoItem = ({ label, value }) => (
  <p><strong>{label}:</strong> {value}</p>
);

const ColumnInfoGroup = ({ data }) => (
  <CCol md={4}>
    {data.map(({ label, value }, idx) => (
      <div className="info-item" key={idx}>
        <label>{label}</label>
        <span>{value}</span>
      </div>
    ))}
  </CCol>
);

const StatusItem = ({ label, value }) => (
  <div className="status-item">
    <label>{label}</label>
    <span>{value}</span>
  </div>
);

const ProfilePage = () => {
  const basicInfo = [
    { label: "Mobile", value: "1234567890" },
    { label: "Email", value: "user@example.com" },
    { label: "Gender", value: "Female" },
    { label: "Age", value: "25" },
    { label: "Height", value: "5'4\"" },
    { label: "DOB", value: "1999-01-01" },
    { label: "Login Type", value: "Google" },
    { label: "Location", value: "Mumbai, India" },
    { label: "Zodiac", value: "Aries" },
  ];

  const personalInfo = [
    { label: "Occupation", value: "Developer" },
    { label: "Education", value: "B.Tech" },
    { label: "Hobbies", value: "Reading, Travel" },
    { label: "Body Type", value: "Slim" },
    { label: "Religion", value: "Hindu" },
    { label: "Language", value: "English, Marathi" },
    { label: "Smoking", value: "No" },
    { label: "Drinking", value: "Occasionally" },
    { label: "Income", value: "₹8 LPA" },
    { label: "Workout", value: "Regular" },
    { label: "Dietary Preference", value: "Vegetarian" },
    { label: "Social Media", value: "@asmita" },
    { label: "Personality Type", value: "INFJ" },
  ];

  const preferences = [
    { label: "Preferred Height", value: "5'6\" - 6'0\"" },
    { label: "Dating Intentions", value: "Serious" },
    { label: "Children", value: "Open to" },
    { label: "Drugs", value: "No" },
    { label: "Smoking", value: "No" },
    { label: "Drinking", value: "Occasionally" },
    { label: "Political Views", value: "Liberal" },
  ];

  const accountInfoColumns = [
    [
      { label: "Account Created", value: "Jan 1, 2023" },
      { label: "Last Login", value: "Jun 15, 2025" },
      { label: "Device", value: "iPhone 14" },
    ],
    [
      { label: "Country", value: "India" },
      { label: "Provider", value: "Google" },
      { label: "Verification Status", value: "Verified" },
    ],
    [
      { label: "Preference", value: "Serious Dating" },
      { label: "Special Tag", value: "Featured User" },
    ]
  ];

  const accountStatus = [
    { label: "VIP Status", value: "No VIP" },
    { label: "Block Status", value: "Not Blocked" },
    { label: "KYC Status", value: "Approved" },
    { label: "Online Status", value: "Online" },
  ];

  const galleryItems = [
    { type: 'image', src: "https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg", alt: "Gallery 1" },
    { type: 'video', src: "video.mp4", alt: "Gallery Video" },
    { type: 'image', src: "https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg", alt: "Gallery 2" },
  ];

  return (
    <CContainer fluid>
      <CRow>
        {/* Left Section */}
        <CCol xs={12} md={4} lg={3}>
          <div className="img-div">
            <img
              src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg"
              alt="Profile"
            />
          </div>
          <div className="text-center mb-3">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>Asmita Ghorpade</p>
            <p style={{ color: "gray", fontSize: "14px" }}>asdfgh</p>
          </div>

          <SectionCard title="Basic Info">
            {basicInfo.map(({ label, value }, idx) => (
              <InfoItem key={idx} label={label} value={value} />
            ))}
          </SectionCard>

          <SectionCard title="Personal Info">
            {personalInfo.map(({ label, value }, idx) => (
              <InfoItem key={idx} label={label} value={value} />
            ))}
          </SectionCard>

          <SectionCard title="Preferences">
            {preferences.map(({ label, value }, idx) => (
              <InfoItem key={idx} label={label} value={value} />
            ))}
          </SectionCard>
        </CCol>

        {/* Right Section */}
        <CCol xs={12} md={8} lg={9}>
          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>Account Information</h5>
              <CRow>
                {accountInfoColumns.map((col, idx) => (
                  <ColumnInfoGroup key={idx} data={col} />
                ))}
              </CRow>
            </CCardBody>
          </CCard>

          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>Account Status</h5>
              <CRow>
                {accountStatus.slice(0, 2).map((item, idx) => (
                  <CCol md={6} key={idx}>
                    <StatusItem {...item} />
                  </CCol>
                ))}
                {accountStatus.slice(2).map((item, idx) => (
                  <CCol md={6} key={idx + 2}>
                    <StatusItem {...item} />
                  </CCol>
                ))}
              </CRow>
            </CCardBody>
          </CCard>

          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>KYC Document</h5>
              <div className="kyc-images">
                <img src="https://adharcarddownload.co/wp-content/uploads/2024/06/aadhaar-card.webp" alt="KYC Front" />
                <img src="https://i.pinimg.com/236x/64/69/41/646941bafe885156af9d432300efab26.jpg" alt="KYC Back" />
              </div>
            </CCardBody>
          </CCard>

          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>Gallery</h5>
              <div className="gallery-grid">
                {galleryItems.map((item, idx) =>
                  item.type === 'image' ? (
                    <img key={idx} src={item.src} alt={item.alt} />
                  ) : (
                    <video key={idx} controls width="150" height="100">
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support video.
                    </video>
                  )
                )}
              </div>
            </CCardBody>
          </CCard>

          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>User Activity</h5>
              <ul>
                {/* Add activity logs here */}
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ProfilePage;
