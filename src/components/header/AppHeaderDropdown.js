import React from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilLockLocked, cilSettings, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: avatar8,
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={user.avatar} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end" style={{ minWidth: '300px' }}>
        <CCard className="border-0 shadow-none">
          <CCardBody className="text-center">
            <CAvatar src={user.avatar} size="lg" className="mb-2" />
            <h6 className="mb-0">{user.name}</h6>
            <CCardText className="text-muted small mb-3">{user.email}</CCardText>
            <div className="d-grid gap-2">
              <CButton color="" variant="outline" className="d-flex align-items-center justify-content-start">
                <CIcon icon={cilUser} className="me-2" />
                My Profile
              </CButton>
              <CButton color="" variant="outline" className="d-flex align-items-center justify-content-start">
                <CIcon icon={cilSettings} className="me-2" />
                Settings
              </CButton>
              <CButton color="danger" className="d-flex align-items-center justify-content-center">
                <CIcon icon={cilLockLocked} className="me-2" />
                Log Out
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
