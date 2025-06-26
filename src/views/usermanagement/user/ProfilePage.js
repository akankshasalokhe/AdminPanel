import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <CContainer fluid>
      <CRow>
        {/* Left Section (Profile + Info) */}
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

          {/* Basic Info */}
          <CCard className="info-card mb-3">
            <CCardBody>
              <h5>Basic Info</h5>
              <p><strong>Mobile:</strong> 1234567890</p>
              <p><strong>Email:</strong> user@example.com</p>
              <p><strong>Gender:</strong> Female</p>
              <p><strong>Age:</strong> 25</p>
              <p><strong>Height:</strong> 5'4"</p>
              <p><strong>DOB:</strong> 1999-01-01</p>
              <p><strong>Login Type:</strong> Google</p>
              <p><strong>Location:</strong> Mumbai, India</p>
              <p><strong>Zodiac:</strong> Aries</p>
            </CCardBody>
          </CCard>

          {/* Personal Info */}
          <CCard className="info-card mb-3">
            <CCardBody>
              <h5>Personal Info</h5>
              <p><strong>Occupation:</strong> Developer</p>
              <p><strong>Education:</strong> B.Tech</p>
              <p><strong>Hobbies:</strong> Reading, Travel</p>
              <p><strong>Body Type:</strong> Slim</p>
              <p><strong>Religion:</strong> Hindu</p>
              <p><strong>Language:</strong> English, Marathi</p>
              <p><strong>Smoking:</strong> No</p>
              <p><strong>Drinking:</strong> Occasionally</p>
              <p><strong>Income:</strong> ₹8 LPA</p>
              <p><strong>Workout:</strong> Regular</p>
              <p><strong>Dietary Preference:</strong> Vegetarian</p>
              <p><strong>Social Media:</strong> @asmita</p>
              <p><strong>Personality Type:</strong> INFJ</p>
            </CCardBody>
          </CCard>

          {/* Preferences */}
          <CCard className="info-card mb-3">
            <CCardBody>
              <h5>Preferences</h5>
              <p><strong>Preferred Height:</strong> 5'6" - 6'0"</p>
              <p><strong>Dating Intentions:</strong> Serious</p>
              <p><strong>Children:</strong> Open to</p>
              <p><strong>Drugs:</strong> No</p>
              <p><strong>Smoking:</strong> No</p>
              <p><strong>Drinking:</strong> Occasionally</p>
              <p><strong>Political Views:</strong> Liberal</p>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Right Section */}
        <CCol xs={12} md={8} lg={9}>
          {/* Account Information */}
          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>Account Information</h5>
              <CRow>
                <CCol md={4}>
                  <div className="info-item"><label>Account Created</label><span>Jan 1, 2023</span></div>
                  <div className="info-item"><label>Last Login</label><span>Jun 15, 2025</span></div>
                  <div className="info-item"><label>Device</label><span>iPhone 14</span></div>
                </CCol>
                <CCol md={4}>
                  <div className="info-item"><label>Country</label><span>India</span></div>
                  <div className="info-item"><label>Provider</label><span>Google</span></div>
                  <div className="info-item"><label>Verification Status</label><span>Verified</span></div>
                </CCol>
                <CCol md={4}>
                  <div className="info-item"><label>Preference</label><span>Serious Dating</span></div>
                  <div className="info-item"><label>Special Tag</label><span>Featured User</span></div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>

          {/* Account Status */}
          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>Account Status</h5>
              <CRow>
                <CCol md={6}>
                  <div className="status-item"><label>VIP Status</label><span>No VIP</span></div>
                  <div className="status-item"><label>Block Status</label><span>Not Blocked</span></div>
                </CCol>
                <CCol md={6}>
                  <div className="status-item"><label>KYC Status</label><span>Approved</span></div>
                  <div className="status-item"><label>Online Status</label><span>Online</span></div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>

          {/* KYC Documents */}
          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>KYC Document</h5>
              <div className="kyc-images">
                <img src="https://adharcarddownload.co/wp-content/uploads/2024/06/aadhaar-card.webp" alt="KYC Front" />
                <img src="https://i.pinimg.com/236x/64/69/41/646941bafe885156af9d432300efab26.jpg" alt="KYC Back" />
              </div>
            </CCardBody>
          </CCard>

          {/* Gallery */}
          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>Gallery</h5>
              <div className="gallery-grid">
                <img src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg" alt="Gallery 1" />
                <video controls width="150" height="100">
                  <source src="video.mp4" type="video/mp4" />
                  Your browser does not support video.
                </video>
                <img src="https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg" alt="Gallery 2" />
              </div>
            </CCardBody>
          </CCard>

          {/* User Activity */}
          <CCard className="mb-4 profile-card">
            <CCardBody>
              <h5>User Activity</h5>
              <ul>
                {/* Add activity logs */}
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ProfilePage;
