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
import FavoriteIcon from '@mui/icons-material/Favorite';

const matchData = [
  {
    id: 1,
    user: { name: 'John Doe', avatar: 'https://i.pravatar.cc/40?img=12' },
    matchedWith: 'Jane Smith',
    matchDate: '2025-06-20',
    firstMessage: '2025-06-20 18:20',
    messageCount: 12,
    status: 'Active',
  },
  {
    id: 2,
    user: { name: 'Alex Kim', avatar: 'https://i.pravatar.cc/40?img=15' },
    matchedWith: 'Emily Park',
    matchDate: '2025-06-18',
    firstMessage: '2025-06-18 11:00',
    messageCount: 7,
    status: 'Unmatched',
  },
];

const MatchesLogPage = () => {
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
            <FavoriteIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Matches
            </Typography>
          </Stack>
          <TextField size="small" placeholder="Search..." sx={{ width: 240 }} />
        </CCardHeader>

        <CCardBody style={{ overflowY: 'auto', paddingTop: 0 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: '#f8f8f8' }}>
              <TableRow>
                <TableCell><strong>Match Users</strong></TableCell>
                <TableCell><strong>Match Date</strong></TableCell>
                <TableCell><strong>First Message</strong></TableCell>
                <TableCell><strong>Messages</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {matchData.map((item) => (
                <TableRow key={item.id} hover>
                  {/* Match Users */}
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={item.user.avatar} />
                      <div>
                        <Typography fontWeight={600}>{item.user.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          Matched with: {item.matchedWith}
                        </Typography>
                      </div>
                    </Stack>
                  </TableCell>

                  {/* Match Date */}
                  <TableCell>{item.matchDate}</TableCell>

                  {/* First Message */}
                  <TableCell>{item.firstMessage}</TableCell>

                  {/* Messages */}
                  <TableCell>{item.messageCount}</TableCell>

                  {/* Status */}
                  <TableCell>
                    <Typography
                      variant="body2"
                      color={item.status === 'Active' ? 'green' : 'gray'}
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

export default MatchesLogPage;
