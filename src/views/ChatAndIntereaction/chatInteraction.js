import React from 'react';
import { CCard, CCardBody } from '@coreui/react';
import { Grid, Typography, Box } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ReportIcon from '@mui/icons-material/Report';
import FlagIcon from '@mui/icons-material/Flag';
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import LogsPage from './LogsPage';

const cardData = [
  { title: 'Total Chats', count: 1280, text: 'messages exchanged', icon: <ChatIcon />, percentage: '+12%' },
  { title: 'Active Conversation', count: 240, text: 'currently talking', icon: <ForumIcon />, percentage: '+8%' },
  { title: 'Video Call', count: 130, text: 'sessions today', icon: <VideoCallIcon />, percentage: '-5%' },
  { title: 'Voice Call', count: 200, text: 'sessions today', icon: <CallIcon />, percentage: '+3%' },
  { title: 'Match Created', count: 520, text: 'successful matches', icon: <PeopleIcon />, percentage: '+10%' },
  { title: 'Report Flag', count: 12, text: 'user complaints', icon: <FlagIcon />, percentage: '-2%' },
  { title: 'Total Chats', count: 9600, text: 'all-time messages', icon: <ChatIcon />, percentage: '+20%' },
  { title: 'Total Chats', count: 128, text: 'today’s messages', icon: <ChatIcon />, percentage: '+4%' },
];

const ChatInteraction = () => {
  return (
    <>
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Chat & Interaction
      </Typography>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CCard style={{
              width: 237,
              height: 204,
              borderRadius: 20,
              border: '1px solid #ccc',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              padding: 16
            }}>
              <CCardBody style={{ padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box
                    sx={{
                      width: 47,
                      height: 42,
                      backgroundColor: '#e0e0e0',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 2,
                      ml: 1
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography variant="body2" sx={{ mt: 2, mr: 2, fontWeight: 600 }}>
                    {card.percentage}
                  </Typography>
                </Box>
                <Box mt={3} ml={1}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {card.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {card.count}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.text}
                  </Typography>
                </Box>
              </CCardBody>
            </CCard>
          </Grid>
        ))}
      </Grid>
    </Box>

    <LogsPage/>
    </>
  );
};

export default ChatInteraction;
