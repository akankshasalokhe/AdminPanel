import React from 'react';
import { CCard, CCardBody } from '@coreui/react';
import { Box, Typography, Chip, Avatar } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './History.css';

const callData = [
  { type: 'voice', name: 'John Doe', datetime: '2025-06-18 03:15 PM', status: 'Completed' },
  { type: 'video', name: 'Jane Smith', datetime: '2025-06-17 11:05 AM', status: 'Declined' },
];

const profileData = [
  { name: 'Emily Carter', image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg', lastViewed: '2025-06-18 04:10 PM', views: 12 },
  { name: 'Liam Walker', image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg', lastViewed: '2025-06-17 10:02 AM', views: 7 },
];

const superData = [
  { name: 'Emily Carter', image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg', date: '2025-06-18', status: 'Matched' },
  { name: 'Liam Walker', image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg', date: '2025-06-17', status: 'Unmatched' },
];

const blockData = [
  { name: 'Liam Walker', image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg', date: '2025-06-18' },
  { name: 'Emily Carter', image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg', date: '2025-06-18' },
];

const SectionCard = ({ title, icon, data, type }) => (
  <CCard className="history-card mt-3">
    <CCardBody className="history-body">
      <Box className="history-title">
        {icon}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>{title}</Typography>
      </Box>
      <Box className="history-logs-container">
        {data.map((user, index) => (
          <Box className="history-log-row" key={index}>
            <Box className="log-icon">
              {type === 'call' ? (
                user.type === 'voice' ? <CallIcon style={{ color: '#009905' }} /> : <VideoCallIcon />
              ) : (
                <Avatar src={user.image} alt={user.name} sx={{ width: 40, height: 40 }} />
              )}
            </Box>
            <Box className="log-details">
              <Typography className="log-name">{user.name}</Typography>
              <Typography className="log-time">
                {type === 'call' ? user.datetime : type === 'profile' ? `Last viewed: ${user.lastViewed}` : user.date}
              </Typography>
            </Box>
            <Box className="log-status">
              {type === 'call' ? (
                <Chip label={user.status} color={user.status === 'Completed' ? 'success' : 'error'} variant="outlined" size="small" />
              ) : type === 'profile' ? (
                <Typography sx={{ color: '#009905', fontWeight: 500 }}>{user.views} views</Typography>
              ) : type === 'super' ? (
                <Typography sx={{ color: '#009905', fontWeight: 500 }}>{user.status}</Typography>
              ) : null}
            </Box>
          </Box>
        ))}
      </Box>
    </CCardBody>
  </CCard>
);

const History = () => {
  return (
    <>
      <SectionCard title="Call History" icon={<CallIcon sx={{ mr: 1 }} />} data={callData} type="call" />
      <SectionCard title="Profile Views" icon={<VisibilityIcon sx={{ mr: 1 }} />} data={profileData} type="profile" />
      <SectionCard title="Super Like Received" icon={<VisibilityIcon sx={{ mr: 1 }} />} data={superData} type="super" />
      <SectionCard title="Blocked Users" icon={<VisibilityIcon sx={{ mr: 1 }} />} data={blockData} type="block" />
    </>
  );
};

export default History;
