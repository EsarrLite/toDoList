import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlert({text}) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%', 
               display: {
                    md: 'block',
                    sm: 'none',
                    xs: 'none',
                },
                
            }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2,
                width: '300px',
                position: 'absolute',
                top: '', 
                right: '-110%',
                backgroundColor: '#7bf1a8'  ,
                color: 'white',
                fontWeight: 'bold'
            }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
}
