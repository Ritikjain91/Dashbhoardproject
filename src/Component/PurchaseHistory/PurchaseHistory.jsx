import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function createData(courseName, dateTime, amount, paymentMethod) {
  return { courseName, dateTime, amount, paymentMethod };
}


const sample = [
  createData('Python for Beginners', '2023-01-15 10:00 AM', '₹500', 'Credit Card'),
  createData('Advanced Python', '2023-02-20 02:30 PM', '₹1500', 'Debit Card'),
  createData('Python Data Science', '2023-03-10 11:45 AM', '₹2000', 'UPI'),
  createData('Python Web Development', '2023-04-05 09:15 AM', '₹2500', 'Net Banking'),
  createData('Python Machine Learning', '2023-05-12 03:00 PM', '₹3000', 'Cash'),
];

// Columns definition
const columns = [
  {
    width: 250,
    label: 'Course Name',
    dataKey: 'courseName',
  },
  {
    width: 200,
    label: 'Date & Time',
    dataKey: 'dateTime',
  },
  {
    width: 100,
    label: 'Amount',
    dataKey: 'amount',
  },
  {
    width: 200,
    label: 'Payment Method',
    dataKey: 'paymentMethod',
  },
  {
    width: 150,
    label: 'Action',
    dataKey: 'action',
  },
];


const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return { id: index, ...randomSelection };
});


function rowContent(_index, row) {
  return (
    <>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? 'right' : 'left'}
        >
          {column.dataKey === 'action' ? (
            <Button
              variant="contained"
              style={{
                color: 'black',
                cursor: 'pointer',
              }}
            >
              Receipt
            </Button>
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </>
  );
}


function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{ backgroundColor: 'background.paper' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

// Mobile view layout
function MobileOnlyView({ paginatedRows, page, handleChangePage }) {
  return (
    <Paper style={{ width: '100%', backgroundColor: 'white' }}>
      {paginatedRows.map((row, index) => (
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
            <Button variant="contained" style={{ color: 'black' }}>
              Receipt
            </Button>
          </Box>
          <Box display="flex" alignItems="center">
            <HistoryToggleOffIcon style={{ marginRight: '8px', color: 'gray' }} />
            <Typography variant="body2" color="textSecondary">
              {row.dateTime}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">
              Amount: {row.amount}
            </Typography>
            <Typography variant="body2">
              Payment: {row.paymentMethod}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box display="flex" justifyContent="center" padding={2}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(rows.length / 10)} 
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </Box>
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
    <MobileOnlyView 
      paginatedRows={paginatedRows} 
      page={page} 
      handleChangePage={handleChangePage} 
    />
  ) : (
    <Paper style={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {fixedHeaderContent()}
          </TableHead>
          <TableBody>
            {paginatedRows.map((row, index) => (
              <TableRow key={index}>
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
