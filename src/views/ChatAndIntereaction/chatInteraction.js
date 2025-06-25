import React from 'react';
import { CCard, CCardBody } from '@coreui/react';
import { Grid, Typography, Box, Stack, Button } from '@mui/material';
import { IoVideocamOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { IoFlagOutline } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
// import { Button, Stack } from 'react-bootstrap';
import ChatLogPage from './ChatLogPage';
import CallLogPage from './CallLogPage';


const cardData = [
  { title: 'Total Chats', count: 1280, text: 'messages exchanged', icon: <AiOutlineMessage color='#8979FF' size={20}/>, percentage: '+12%' },
  { title: 'Active Conversation', count: 240, text: 'currently talking', icon: <HiUsers color='#4157FB' size={20}/>, percentage: '+8%' },
  { title: 'Video Call', count: 130, text: 'sessions today', icon: <IoVideocamOutline color='#009905' size={20}/>, percentage: '-5%' },
  { title: 'Voice Call', count: 200, text: 'sessions today', icon: <MdWifiCalling3 color='#F00000' size={20}/>, percentage: '+3%' },
  { title: 'Match Created', count: 520, text: 'successful matches', icon: <HiUsers color='#E440DCC4' size={20}/>, percentage: '+10%' },
  { title: 'Report Flag', count: 12, text: 'user complaints', icon: <IoFlagOutline color='#F00000' size={20}/>, percentage: '-2%' },
  { title: 'Total Chats', count: 9600, text: 'all-time messages', icon: <AiOutlineMessage color='#8979FF' size={20}/>, percentage: '+20%' },
  { title: 'Total Chats', count: 128, text: 'today’s messages', icon: <AiOutlineMessage color='#8979FF' size={20}/>, percentage: '+4%' },
];
const tabList = [
  { label: 'Chat Log', value: 'chat' },
  { label: 'Call Logs', value: 'calls' },
  { label: 'Super Likes', value: 'superlikes' },
  { label: 'Profile Views', value: 'views' },
  { label: 'Matches', value: 'matches' },
]

const ChatInteraction = () => {
  const [activeTab, setActiveTab] = React.useState('chat') 

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return <ChatLogPage />
      case 'calls':
        return <CallLogPage />
      case 'superlikes':
        return <p>This is the Super Likes page.</p>
      case 'views':
        return <p>This is the Profile Views page.</p>
      case 'matches':
        return <p>This is the Matches page.</p>
      default:
        return <p>Invalid tab.</p>
    }
  }
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
                      backgroundColor: '#8979FF3B',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt:2
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography variant="body2" sx={{fontWeight: 600,color:"green" }}>
                    {card.percentage}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" color='#00001A9E'>
                    {card.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="600">
                    {card.count}
                  </Typography>
                  <Typography variant="body2" color="#00000045" fontWeight={400}>
                    {card.text}
                  </Typography>
                </Box>
              </CCardBody>
            </CCard>
          </Grid>
        ))}
      </Grid>
    </Box>

    <div>
      <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
        {tabList.map(({ label, value }) => (
          <Button
            key={value}
            variant={activeTab === value ? 'contained' : 'outlined'}
            onClick={() => setActiveTab(value)}
            sx={{
              color: activeTab === value ? 'white' : '#9747FF',
              backgroundColor: activeTab === value ? '#9747FF' : 'transparent',
              border: 'none',
              '&:hover': {
                backgroundColor: activeTab === value ? '#7b35d3' : '#f3eaff',
              },
              textTransform: 'none',
            }}
          >
            {label}
          </Button>
        ))}
      </Stack>

      <CCard className="m-4">
        <CCardBody>
          {renderContent()}
        </CCardBody>
      </CCard>
    </div>
    </>
  );
};

export default ChatInteraction;
