import * as React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box display="flex" justifyContent="flex-end"> 
      <Stack spacing={2}>
     
        <Pagination count={68} page={page} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
