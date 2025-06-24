import React from 'react';
import { CCard, CCardBody } from '@coreui/react';
import { Box, Typography, Chip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './History.css'; // Custom styles

const callData = [
  {
    type: 'voice',
    name: 'John Doe',
    datetime: '2025-06-18 03:15 PM',
    status: 'Completed',
  },
  {
    type: 'video',
    name: 'Jane Smith',
    datetime: '2025-06-17 11:05 AM',
    status: 'Declined',
  },
   {
    type: 'voice',
    name: 'John Doe',
    datetime: '2025-06-18 03:15 PM',
    status: 'Completed',
  },
  {
    type: 'video',
    name: 'Jane Smith',
    datetime: '2025-06-17 11:05 AM',
    status: 'Declined',
  },
];

const profileData = [
  {
    name: 'Emily Carter',
    image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    lastViewed: '2025-06-18 04:10 PM',
    views: 12,
  },
  {
    name: 'Liam Walker',
    image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    lastViewed: '2025-06-17 10:02 AM',
    views: 7,
  },
   {
    name: 'Emily Carter',
    image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    lastViewed: '2025-06-18 04:10 PM',
    views: 12,
  },
  {
    name: 'Liam Walker',
    image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    lastViewed: '2025-06-17 10:02 AM',
    views: 7,
  },
   {
    name: 'Emily Carter',
    image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    lastViewed: '2025-06-18 04:10 PM',
    views: 12,
  },
  {
    name: 'Liam Walker',
    image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
    lastViewed: '2025-06-17 10:02 AM',
    views: 7,
  },

];

  const SuperData = [
        {
            name: 'Emily Carter',
            image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
            date: '2025-06-18',
            status: 'Matched',         
        },
        {
            name: 'Emily Carter',
            image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
            date: '2025-06-18',
            status: 'Unmatched',         
        },
  ];

  const blockData = [
    {
            name: 'Emily Carter',
            image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
            date: '2025-06-18',
        },
        {
            name: 'Emily Carter',
            image: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
            date: '2025-06-18',
        },
  ]

const History = () => {
  return (
   <>
         <CCard className="call-history-card">
      <CCardBody className="call-history-body">
        {/* Title Section */}
        <Box className="call-history-title">
          <CallIcon style={{ marginRight: '8px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Call History
          </Typography>
        </Box>

        {/* Logs Section */}
        <Box className="call-logs-container">
          {callData.map((log, index) => (
            <Box className="call-log-row" key={index}>
              {/* Icon */}
              <Box className="log-icon">
                {log.type === 'voice' ? <CallIcon style={{color:"#009905"}} /> : <VideoCallIcon />}
              </Box>

              {/* Name and Time */}
              <Box className="log-details">
                <Typography className="log-name">{log.name}</Typography>
                <Typography className="log-time">{log.datetime}</Typography>
              </Box>

              {/* Status */}
              <Box className="log-status">
                <Chip
                  label={log.status}
                  color={log.status === 'Completed' ? 'success' : 'error'}
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </CCardBody>
    </CCard>

     <CCard className="profile-history-card mt-3">
      <CCardBody className="profile-history-body">
        {/* Title */}
        <Box className="profile-history-title">
          <VisibilityIcon style={{ marginRight: '8px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Profile Views
          </Typography>
        </Box>

        {/* List */}
        <Box className="profile-logs-container">
          {profileData.map((user, index) => (
            <Box className="profile-log-row" key={index}>
              {/* Profile Image */}
              <Box className="log-icon">
                <img src={user.image} alt={user.name} sx={{ width: 40, height: 40 }} />
              </Box>

              {/* Name & Last Viewed */}
              <Box className="log-details">
                <Typography className="log-name">{user.name}</Typography>
                <Typography className="log-time">Last viewed: {user.lastViewed}</Typography>
              </Box>

              {/* Views Count */}
              <Box className="log-status">
                <Typography sx={{ color: '##009905', fontWeight: 500 }}>
                  {user.views} views
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CCardBody>
    </CCard>

     <CCard className="super-history-card mt-3">
      <CCardBody className="profile-history-body">
        {/* Title */}
        <Box className="super-history-title">
          <VisibilityIcon style={{ marginRight: '8px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Super Like Recieve
          </Typography>
        </Box>

        {/* List */}
        <Box className="super-logs-container">
          {SuperData.map((user, index) => (
            <Box className="super-log-row" key={index}>
              {/* Profile Image */}
              <Box className="log-icon">
                <img src={user.image} alt={user.name} sx={{ width: 40, height: 40 }} />
              </Box>

              {/* Name & Last Viewed */}
              <Box className="log-details">
                <Typography className="log-name">{user.name}</Typography>
                <Typography className="log-time">{user.date}</Typography>
              </Box>

              {/* Views Count */}
              <Box className="log-status">
                <Typography sx={{ color: '##009905', fontWeight: 500 }}>
                  {user.status}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CCardBody>
    </CCard>

    <CCard className="super-history-card mt-3">
      <CCardBody className="profile-history-body">
        {/* Title */}
        <Box className="super-history-title">
          <VisibilityIcon style={{ marginRight: '8px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
            Block List
          </Typography>
        </Box>

        {/* List */}
        <Box className="super-logs-container">
          {blockData.map((user, index) => (
            <Box className="super-log-row" key={index}>
              {/* Profile Image */}
              <Box className="log-icon">
                <img src={user.image} alt={user.name} sx={{ width: 40, height: 40 }} />
              </Box>

              {/* Name & Last Viewed */}
              <Box className="log-details">
                <Typography className="log-name">{user.name}</Typography>
                <Typography className="log-time">{user.date}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CCardBody>
    </CCard>


   </>
  );
};

export default History;
