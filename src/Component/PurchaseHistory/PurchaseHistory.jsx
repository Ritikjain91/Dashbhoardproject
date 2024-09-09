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
import TextField from '@mui/material/TextField'; 
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BiReceipt } from 'react-icons/bi';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

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

const columns = [
  {
    width: 250,
    label: 'Course Name',
    dataKey: 'courseName',
    marginBottom: '8px',
  },
  {
    width: 200,
    label: 'Date & Time',
    dataKey: 'dateTime',
    marginBottom: '16px',
  },
  {
    width: 100,
    label: 'Amount',
    dataKey: 'amount',
    marginBottom: '12px',
  },
  {
    width: 200,
    label: 'Payment Method',
    dataKey: 'paymentMethod',
    marginBottom: '10px',
  },
  {
    width: 150,
    label: 'Action',
    dataKey: 'action',
    marginBottom: '8px',
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return { id: index, ...randomSelection };
});

function rowContent(row) {
  return columns.map((column) => (
    <TableCell
      key={column.dataKey}
      align={column.numeric ? 'right' : 'left'}
      sx={{ marginBottom: column.marginBottom }}
    >
      {column.dataKey === 'action' ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <BiReceipt style={{ marginRight: '8px' }} />
          <Button
            variant="contained"
            sx={{ color: 'black', cursor: 'pointer' }}
          >
            Receipt
          </Button>
        </Box>
      ) : (
        row[column.dataKey]
      )}
    </TableCell>
  ));
}

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric ? 'right' : 'left'}
          style={{ width: column.width, backgroundColor: 'white' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function MobileOnlyView({ paginatedRows, page, handleChangePage }) {
  return (
    <Box>
      {paginatedRows.map((row, index) => (
        <Box
          key={index}
          sx={{
            padding: '8px',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
            marginBottom: '8px',
            borderRadius: '8px',
            backgroundColor: 'white',
            marginX: '8px',
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '14px', flex: 1 }}>
              {row.courseName}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BiReceipt style={{ marginRight: '8px' }} />
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  padding: '4px 8px',
                  fontSize: '10px',
                  minWidth: 'auto',
                  marginLeft: '8px',
                }}
              >
                Receipt
              </Button>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" sx={{ marginY: '4px' }}>
            <HistoryToggleOffIcon
              sx={{ marginRight: '4px', color: 'gray', fontSize: '18px' }}
            />
            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '12px' }}>
              {row.dateTime}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ fontSize: '12px' }}>
              {row.amount}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>
              <FaMoneyBillTransfer style={{ marginRight: '4px' }} />
              {row.paymentMethod}
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
    </Box>
  );
}

export default function ResponsiveTable() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [page, setPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState(''); 
  const [filteredRows, setFilteredRows] = React.useState(rows); 

  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };


  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = rows.filter((row) =>
      row.courseName.toLowerCase().includes(value)
    );
    setFilteredRows(filtered);
  };

  const paginatedRows = filteredRows.slice((page - 1) * 10, page * 10);

  return (
    <React.Fragment>
    
    <Box
  sx={{
    display: {
      xl: 'none',
      lg: 'none',
      md: 'none', 
      sm: 'none',
      xs:'none'
    },
    justifyContent: 'center',
  }}
>
  <TextField
    fullWidth
    variant="outlined"
    placeholder="Search Courses"
    value={searchTerm}
    onChange={handleSearch}
    sx={{
      '& .MuiInputBase-root': {
        height: isMobile ? '32px' : '48px',
        fontSize: isMobile ? '12px' : '18px',
        width: '97%',
        mx: 2,
        my: 2.5,
      },
    }}
  />
</Box>


      {isMobile ? (
        <MobileOnlyView paginatedRows={paginatedRows} page={page} handleChangePage={handleChangePage} />
      ) : (
        <TableContainer component={Paper} sx={{ backgroundColor: 'white' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              {fixedHeaderContent()}
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow key={row.id}>
                  {rowContent(row)}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="center" padding={2}>
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(filteredRows.length / 10)}
                page={page}
                onChange={handleChangePage}
              />
            </Stack>
          </Box>
        </TableContainer>
      )}
    </React.Fragment>
  );
}
