import React from 'react';
import {
  CContainer, CRow, CCol, CCard, CCardBody, CCardHeader, CFormInput,
} from '@coreui/react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { FiSearch } from 'react-icons/fi';

const AdminDashboard = () => {
  return (
    <CContainer fluid className="p-4">
      {/* Title and Search */}
      <CRow className="mb-4 align-items-center">
        <CCol md={6}>
          <Typography variant="h5" fontWeight="bold">Admin Dashboard</Typography>
        </CCol>
        <CCol md={6}>
          <Box display="flex" alignItems="center">
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: <FiSearch style={{ marginRight: 8 }} />,
              }}
            />
          </Box>
        </CCol>
      </CRow>

      {/* Main Content */}
      <CRow>
        {/* Right Side */}
        <CCol md={9}>
          {/* Stat Boxes */}
          <CRow className="mb-4">
            {[
              { title: 'Total Users', value: 1200 },
              { title: 'Active Matches', value: 54 },
              { title: 'Recent Crossing', value: 29 },
              { title: 'Revenue', value: '$2,300' },
            ].map((item, index) => (
              <CCol key={index} xs={6} md={3}>
                <CCard className="mb-3 shadow-sm">
                  <CCardBody>
                    <Typography variant="subtitle1">{item.title}</Typography>
                    <Typography variant="h6" fontWeight="bold">{item.value}</Typography>
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </CRow>

          {/* Recent Activity & Crossing Hotspot */}
          <CRow className="mb-4">
            <CCol md={6}>
              <CCard className="shadow-sm">
                <CCardHeader>Recent Activity</CCardHeader>
                <CCardBody>
                  {[1, 2, 3].map((item, index) => (
                    <Typography key={index}>New user registration - #{index + 1}</Typography>
                  ))}
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={6}>
              <CCard className="shadow-sm">
                <CCardHeader>Crossing Hotspot</CCardHeader>
                <CCardBody>
                  {[1, 2, 3].map((item, index) => (
                    <Typography key={index}>Central Park - {Math.floor(Math.random() * 100)}</Typography>
                  ))}
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          {/* Reported Users Table */}
          <CCard className="shadow-sm mb-4">
            <CCardHeader>Reported Users</CCardHeader>
            <CCardBody>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Reporter User</TableCell>
                      <TableCell>Reported User</TableCell>
                      <TableCell>Reason</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[1, 2, 3].map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>UserA</TableCell>
                        <TableCell>UserB</TableCell>
                        <TableCell>Spam</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>2025-06-10</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Left Side */}
        <CCol md={3}>
          {/* Filter by Date */}
          <CCard className="mb-4 shadow-sm">
            <CCardHeader>Filter by Date</CCardHeader>
            <CCardBody>
              <TextField fullWidth type="date" size="small" />
            </CCardBody>
          </CCard>

          {/* Top Contributors */}
          <CCard className="mb-4 shadow-sm">
            <CCardHeader>Top Contributors</CCardHeader>
            <CCardBody>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Coins</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[1, 2, 3].map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>Contributor {index + 1}</TableCell>
                        <TableCell>{1000 - index * 100}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CCardBody>
          </CCard>

          {/* Recent Users */}
          <CCard className="shadow-sm">
            <CCardHeader>Recent Users</CCardHeader>
            <CCardBody>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[1, 2, 3].map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>User {index + 1}</TableCell>
                        <TableCell>2025-06-0{index + 1}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default AdminDashboard;
