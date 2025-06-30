import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader
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
  Typography
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useNavigate } from 'react-router-dom';

const sampleData = [
  { id: 1, user: 'John Doe', messages: 12, datetime: '2025-06-21 14:30', status: 'Active' },
  { id: 2, user: 'Jane Smith', messages: 5, datetime: '2025-06-21 12:00', status: 'Inactive' },
  { id: 3, user: 'Alex Kim', messages: 20, datetime: '2025-06-20 17:15', status: 'Active' },
];

const ChatLogPage = () => {
  const navigate = useNavigate();

  const handleViewDetails = (userId) => {
    navigate(`../profile/${userId}`); 
  };
  return (
    <div style={{ width: '100%', height: '522px' }}>
      <CCard style={{
        borderRadius: '20px',
        border: '1px solid #e0e0e0',
        height: '100%',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)'
      }}>
        <CCardHeader style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 8
        }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <ChatBubbleOutlineIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>Chat Log</Typography>
          </Stack>
          <TextField size="small" placeholder="Search..." sx={{ width: 240 }} />
        </CCardHeader>

        <CCardBody style={{ overflowY: 'auto', paddingTop: 0 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: '#f8f8f8' }}>
              <TableRow>
                <TableCell><strong>Users</strong></TableCell>
                <TableCell><strong>Messages</strong></TableCell>
                <TableCell><strong>Date/Time</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.messages}</TableCell>
                  <TableCell>{row.datetime}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      color={row.status === 'Active' ? 'green' : 'gray'}
                      fontWeight={500}
                    >
                      {row.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 2
                    }}
                              onClick={() => handleViewDetails(user._id)} 
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

export default ChatLogPage;
