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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const superLikeData = [
  {
    id: 1,
    sender: { name: 'John Doe', userId: 'JD123', avatar: 'https://i.pravatar.cc/40?img=4' },
    receiver: { name: 'Jane Smith', userId: 'JS456', avatar: 'https://i.pravatar.cc/40?img=5' },
    message: 'Hey! I really like your profile 😊',
    time: '2025-06-21 13:45',
    status: 'Match',
  },
  {
    id: 2,
    sender: { name: 'Alex Kim', userId: 'AK789', avatar: 'https://i.pravatar.cc/40?img=6' },
    receiver: { name: 'Emily Park', userId: 'EP101', avatar: 'https://i.pravatar.cc/40?img=7' },
    message: 'Would love to connect with you!',
    time: '2025-06-20 20:15',
    status: 'Unmatch',
  },
];

const SuperLikePage = () => {
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
            <FavoriteBorderIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Super Like Send/Reciver
            </Typography>
          </Stack>
          <TextField size="small" placeholder="Search..." sx={{ width: 240 }} />
        </CCardHeader>

        <CCardBody style={{ overflowY: 'auto', paddingTop: 0 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: '#f8f8f8' }}>
              <TableRow>
                <TableCell><strong>Sender</strong></TableCell>
                <TableCell><strong>Reciver</strong></TableCell>
                <TableCell><strong>Message</strong></TableCell>
                <TableCell><strong>Time</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {superLikeData.map((item) => (
                <TableRow key={item.id} hover>
                  {/* Sender */}
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={item.sender.avatar} />
                      <div>
                        <Typography fontWeight={600}>{item.sender.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          ID: {item.sender.userId}
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>

                  {/* Receiver */}
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={item.receiver.avatar} />
                      <div>
                        <Typography fontWeight={600}>{item.receiver.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          ID: {item.receiver.userId}
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>

                  {/* Message */}
                  <TableCell>
                    <Typography variant="body2">{item.message}</Typography>
                  </TableCell>

                  {/* Time */}
                  <TableCell>{item.time}</TableCell>

                  {/* Status */}
                  <TableCell>
                    <Typography
                      variant="body2"
                      color={item.status === 'Match' ? 'green' : 'red'}
                      fontWeight={500}
                    >
                      {item.status}
                    </Typography>
                  </TableCell>

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

export default SuperLikePage;
