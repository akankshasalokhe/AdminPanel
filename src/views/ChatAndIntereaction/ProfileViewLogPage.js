import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  Stack,
  Typography,
  Avatar,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const profileViewData = [
  {
    id: 1,
    viewer: { name: 'John Doe', userId: 'JD123', avatar: 'https://i.pravatar.cc/40?img=8' },
    viewed: { name: 'Jane Smith', userId: 'JS456', avatar: 'https://i.pravatar.cc/40?img=9' },
    viewCount: 3,
    duration: '5m',
    lastViewed: '2025-06-21 15:00',
  },
  {
    id: 2,
    viewer: { name: 'Alex Kim', userId: 'AK789', avatar: 'https://i.pravatar.cc/40?img=10' },
    viewed: { name: 'Emily Park', userId: 'EP101', avatar: 'https://i.pravatar.cc/40?img=11' },
    viewCount: 1,
    duration: '30s',
    lastViewed: '2025-06-20 18:20',
  },
];

const ProfileViewLogPage = () => {
  return (
    <div style={{ width: '100%', height: '522px' }}>
      <CCard
        style={{
          borderRadius: '20px',
          border: '1px solid #e0e0e0',
          height: '100%',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
        }}
      >
        <CCardHeader
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 8,
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <VisibilityIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Profile View
            </Typography>
          </Stack>
          <TextField size="small" placeholder="Search..." sx={{ width: 240 }} />
        </CCardHeader>

        <CCardBody style={{ overflowY: 'auto', paddingTop: 0 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: '#f8f8f8' }}>
              <TableRow>
                <TableCell><strong>Viewer</strong></TableCell>
                <TableCell><strong>Profile Viewed</strong></TableCell>
                <TableCell><strong>View Count</strong></TableCell>
                <TableCell><strong>Duration</strong></TableCell>
                <TableCell><strong>Last Viewed</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profileViewData.map((item) => (
                <TableRow key={item.id} hover>
                  {/* Viewer */}
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={item.viewer.avatar} />
                      <div>
                        <Typography fontWeight={600}>{item.viewer.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          ID: {item.viewer.userId}
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>

                  {/* Profile Viewed */}
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={item.viewed.avatar} />
                      <div>
                        <Typography fontWeight={600}>{item.viewed.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          ID: {item.viewed.userId}
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>

                  {/* View Count */}
                  <TableCell>{item.viewCount}</TableCell>

                  {/* Duration */}
                  <TableCell>{item.duration}</TableCell>

                  {/* Last Viewed */}
                  <TableCell>{item.lastViewed}</TableCell>

                  {/* Action */}
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        px: 2,
                      }}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default ProfileViewLogPage;
