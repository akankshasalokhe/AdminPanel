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
  Chip,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

const callData = [
  {
    id: 1,
    fromUser: { name: 'John Doe', avatar: 'https://i.pravatar.cc/40?img=1' },
    toUser: 'Jane Smith',
    type: 'Video',
    duration: '15:30',
    time: '2025-06-21 14:00',
    status: 'Completed',
  },
  {
    id: 2,
    fromUser: { name: 'Alex Kim', avatar: 'https://i.pravatar.cc/40?img=2' },
    toUser: 'Mike Lee',
    type: 'Voice',
    duration: '08:12',
    time: '2025-06-21 11:45',
    status: 'Missed',
  },
  {
    id: 3,
    fromUser: { name: 'Emily Clark', avatar: 'https://i.pravatar.cc/40?img=3' },
    toUser: 'Sarah Park',
    type: 'Video',
    duration: '23:05',
    time: '2025-06-20 18:20',
    status: 'Completed',
  },
];

const CallLogPage = () => {
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
            <CallIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Voice & Video Call
            </Typography>
          </Stack>
          <TextField size="small" placeholder="Search..." sx={{ width: 240 }} />
        </CCardHeader>

        <CCardBody style={{ overflowY: 'auto', paddingTop: 0 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: '#f8f8f8' }}>
              <TableRow>
                <TableCell><strong>Users</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Duration</strong></TableCell>
                <TableCell><strong>Time</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {callData.map((call) => (
                <TableRow key={call.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={call.fromUser.avatar} alt={call.fromUser.name} />
                      <div>
                        <Typography fontWeight={600}>{call.fromUser.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          to {call.toUser}
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={call.type}
                      color={call.type === 'Video' ? 'primary' : 'secondary'}
                      size="small"
                      sx={{ fontWeight: 500, textTransform: 'capitalize' }}
                    />
                  </TableCell>
                  <TableCell>{call.duration}</TableCell>
                  <TableCell>{call.time}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color={call.status === 'Completed' ? 'green' : 'red'}
                      fontWeight={500}
                    >
                      {call.status}
                    </Typography>
                  </TableCell>
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

export default CallLogPage;
