import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie({highFolder, mediumFolder, lowFolder}) {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 1, value: highFolder.length, label: 'High', color: '#fc2821' },
            { id: 2, value: mediumFolder.length, label: 'Medium', color: '#e3f51b' },
            { id: 3, value: lowFolder.length, label: 'Low', color: '#23fa2a' },
          ],
        },
      ]}
      width={100}
      height={100}
      sx={{
        '& .MuiPieArc-root': {
          stroke: 'none',
        },
      }}
    />
  );
}
