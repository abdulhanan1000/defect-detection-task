import React from 'react';
import { Drawer, Box, Typography } from '@mui/material';

const ResultSidebar = ({ result }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
    >
      <Box
        width="250px"
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h6">Classification Result</Typography>
        {result && (
          <Box
            mt={2}
            p={2}
            bgcolor={result === 'OK' ? 'green' : 'red'}
            color="white"
            borderRadius="5px"
            textAlign="center"
            width="100%"
          >
            <Typography variant="h5">{result}</Typography>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default ResultSidebar;
