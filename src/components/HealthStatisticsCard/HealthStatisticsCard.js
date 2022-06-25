import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';

export default function HealthStatisticsCard() {
  return (
    <Card sx={{ minWidth: 214, borderRadius: 4 }}>
        <CardHeader
            avatar={<Avatar><FolderIcon /></Avatar>}
        />
      <CardContent>
        <Typography variant="h5" component="div">
          Total Appointments
        </Typography>
        <Typography variant="h6" component="div" >
          50
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 11}}>
          Last 24 hours
        </Typography>
      </CardContent>
    </Card>
  );
}
