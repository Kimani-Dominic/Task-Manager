
import React from 'react';
import { Paper, Typography } from '@mui/material';

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>Task Details</h2>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="body1">{task}</Typography>
      </Paper>
    </div>
  );
};

export default TaskDetails;