// ChatLog.js
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

const sampleData = [
  { id: 1, user: 'John Doe', messages: 12, datetime: '2025-06-21 14:30', status: 'Active' },
  { id: 2, user: 'Jane Smith', messages: 5, datetime: '2025-06-21 12:00', status: 'Inactive' },
  { id: 3, user: 'Alex Kim', messages: 20, datetime: '2025-06-20 17:15', status: 'Active' },
];

const ChatLogPage = () => {
  return (
    <div style={{ width: '1017px', height: '522px', margin: 'auto' }}>
      <CCard style={{ borderRadius: '20px', border: '1px solid #ccc', height: '100%' }}>
        <CCardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <ChatBubbleOutlineIcon color="primary" />
            <Typography variant="h6">Chat Log</Typography>
          </Stack>
          <TextField size="small" placeholder="Search..." />
        </CCardHeader>
        <CCardBody style={{ overflowY: 'auto', paddingTop: 0 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Users</strong></TableCell>
                <TableCell><strong>Messages Count</strong></TableCell>
                <TableCell><strong>Date/Time</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>{row.messages}</TableCell>
                  <TableCell>{row.datetime}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small">View Details</Button>
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
