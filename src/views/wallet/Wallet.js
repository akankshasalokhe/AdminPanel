import React from 'react';
import { CCard, CCardBody, CCardTitle } from '@coreui/react';
import { Grid } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SendIcon from '@mui/icons-material/Send';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

const Wallet = ({ totalCoins, sentCoins, receivedCoins }) => {
  return (
    <div className="p-4">
      <h3 className="mb-4">Wallet Summary</h3>
      <Grid container spacing={3}>
        {/* Total Coins */}
        <Grid item xs={12} md={4}>
          <CCard className="text-center shadow-sm border-0">
            <CCardBody>
              <MonetizationOnIcon fontSize="large" color="primary" />
              <CCardTitle className="mt-2 fw-bold">Total Coins</CCardTitle>
              <h4 className="text-primary">{totalCoins}</h4>
            </CCardBody>
          </CCard>
        </Grid>

        {/* Sent Coins */}
        <Grid item xs={12} md={4}>
          <CCard className="text-center shadow-sm border-0">
            <CCardBody>
              <SendIcon fontSize="large" color="error" />
              <CCardTitle className="mt-2 fw-bold">Sent Coins</CCardTitle>
              <h4 className="text-danger">{sentCoins}</h4>
            </CCardBody>
          </CCard>
        </Grid>

        {/* Received Coins */}
        <Grid item xs={12} md={4}>
          <CCard className="text-center shadow-sm border-0">
            <CCardBody>
              <CallReceivedIcon fontSize="large" color="success" />
              <CCardTitle className="mt-2 fw-bold">Received Coins</CCardTitle>
              <h4 className="text-success">{receivedCoins}</h4>
            </CCardBody>
          </CCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Wallet;
