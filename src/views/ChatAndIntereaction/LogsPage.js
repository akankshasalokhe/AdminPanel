// LogsPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CCard, CCardBody } from '@coreui/react';
import { Button, Stack } from '@mui/material';
import ChatLogPage from './ChatLogPage';

const tabList = [
  { label: 'Chat Log', value: 'chat' },
  { label: 'Call Logs', value: 'calls' },
  { label: 'Super Likes', value: 'superlikes' },
  { label: 'Profile Views', value: 'views' },
  { label: 'Matches', value: 'matches' },
];

const LogsPage = () => {
  const { tab = 'chat' } = useParams(); // ✅ Default to "calls"
  const navigate = useNavigate();

  const renderContent = () => {
    switch (tab) {
      case 'chat':
        return <ChatLogPage/>;
      case 'calls':
        return <p>This is the Call Logs page.</p>;
      case 'superlikes':
        return <p>This is the Super Likes page.</p>;
      case 'views':
        return <p>This is the Profile Views page.</p>;
      case 'matches':
        return <p>This is the Matches page.</p>;
      default:
        return <p>Invalid tab.</p>;
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
        {tabList.map(({ label, value }) => (
          <Button
            key={value}
            variant={tab === value ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => navigate(`/logs/${value}`)}
          >
            {label}
          </Button>
        ))}
      </Stack>

      <CCard className="m-4">
        <CCardBody>
          <div>{renderContent()}</div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default LogsPage;
