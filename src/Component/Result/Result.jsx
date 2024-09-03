import * as React from 'react';
import { BiExpand } from "react-icons/bi";
import { Box, Typography, Paper, Button, useMediaQuery } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

function createData(courseName, dateTime, status, score, action) {
  return { courseName, dateTime, status, score, action };
}

const iconStyle = { color: '#FFD700', fontSize: '24px', cursor: 'pointer' }; 
const sample = [
  createData('Python for Beginners', '2023-01-15 10:00 AM', 'pass', 150, <BiExpand style={iconStyle} />),
  createData('Advanced Python', '2023-02-20 02:30 PM', 'pass', 220, <BiExpand style={iconStyle} />),
  createData('Python Data Science', '2023-03-10 11:45 AM', 'fail', 175, <BiExpand style={iconStyle} />),
  createData('Python Web Development', '2023-04-05 09:15 AM', 'pass', 190, <BiExpand style={iconStyle} />),
  createData('Python Machine Learning', '2023-05-12 03:00 PM', 'pass', 200, <BiExpand style={iconStyle} />),
];

const columns = [
  { label: 'Course Name', dataKey: 'courseName', width: { sm: 150, md: 250, lg: 300 } },
  { label: 'Date & Time', dataKey: 'dateTime', width: { sm: 120, md: 200, lg: 250 } },
  { label: 'Status', dataKey: 'status', width: { sm: 80, md: 100, lg: 120 } },
  { label: 'Score', dataKey: 'score', numeric: true, width: { sm: 80, md: 100, lg: 120 } },
  { label: 'Action', dataKey: 'action', width: { sm: 60, md: 80, lg: 100 } },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return { id: index, ...randomSelection };
});

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            display: {
              xs: 'none', 
              sm: 'none', 
              md: 'none', 
              lg: 'table-cell', 
              xl: 'table-cell', 
            },
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? 'right' : 'left'}
        >
          {column.dataKey === 'status' ? (
            <Button
              variant="contained"
              style={{
                backgroundColor: row.status === 'pass' ? 'green' : 'red',
                color: 'white',
              }}
            >
              {row.status}
            </Button>
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </>
  );
}

function MobileOnlyView() {
  return (
    <Paper style={{ height: '100vh', width: '100%', backgroundColor: 'white' }}> 
      {rows.map((row, index) => (
        <Box
          key={index}
          sx={{
            padding: '16px',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',  
            marginBottom: '8px', 
            borderRadius: '8px',  
            backgroundColor: 'white', 
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold">
              {row.courseName}
            </Typography>
            {row.action}
          </Box>
          <Box display="flex" alignItems="center" gap="4px">
            <HistoryToggleOffIcon style={{ color: 'gray' }} />
            <Typography variant="body2" color="textSecondary">
              {row.dateTime}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">
              Score: {row.score}
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: row.status === 'pass' ? 'green' : 'red',
                color: 'white',
                padding: '4px 12px',
                fontSize: '12px',
              }}
            >
              {row.status.toUpperCase()}
            </Button>
          </Box>
        </Box>
      ))}
    </Paper>
  );
}

export default function ResponsiveTable() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

 
  const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return isMobile ? (
    <MobileOnlyView />
  ) : (
    <Paper style={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }}>
          <TableHead>
            {fixedHeaderContent()}
          </TableHead>
          <TableBody>
            {paginatedRows.map((row, index) => (
              <TableRow key={row.id}>
                {rowContent(index, row)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end" padding={2}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </Box>
    </Paper>
  );
}
