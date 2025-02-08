import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const App: React.FC = () => {
  const [day, setDay] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      setDay(days[now.getDay()]);

      const dayOfMonth = now.getDate();
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      setDate(`${month} ${dayOfMonth}, ${year}`);

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'lightgray',
        padding: 2,
      }}
    >
      <Paper
        sx={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Today is:
        </Typography>

        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          <strong>Day:</strong> {day}
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          <strong>Date:</strong> {date}
        </Typography>
        <Typography variant="body1" align="center">
          <strong>Time:</strong> {time}
        </Typography>
      </Paper>
    </Box>
  );
};

export default App;
