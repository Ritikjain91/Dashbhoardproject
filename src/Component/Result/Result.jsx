import * as React from 'react';
import { BiExpand } from "react-icons/bi";
import { Box, Typography, Paper, Button, useMediaQuery, TextField } from '@mui/material';
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
  { label: 'Course Name', dataKey: 'courseName', width: { sm: 130, md: 200, lg: 250 } },
  { label: 'Date & Time', dataKey: 'dateTime', width: { sm: 110, md: 180, lg: 220 } },
  { label: 'Status', dataKey: 'status', width: { sm: 70, md: 90, lg: 110 } },
  { label: 'Score', dataKey: 'score', numeric: true, width: { sm: 70, md: 90, lg: 110 } },
  { label: 'Action', dataKey: 'action', width: { sm: 50, md: 70, lg: 90 } },
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
          align={column.numeric ? 'right' : 'left'}
          sx={{
            width: { xs: column.width.sm, sm: column.width.sm, md: column.width.md, lg: column.width.lg },
            display: { xs: 'none',md:'table-cell',sm:"table-cell" ,lg: 'table-cell' },
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
        <TableCell key={column.dataKey} align={column.numeric ? 'right' : 'left'}>
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


function MobileOnlyView({ page, rowsPerPage, handleChangePage }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [searchTerm, setSearchTerm] = React.useState('');


  const filteredRows = rows.filter(row =>
    row.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const paginatedRows = filteredRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Paper style={{ width: '100%', backgroundColor: 'transparent', }}>
      <Box padding={isMobile ? 1 : 2} sx={{ mx: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            '& .MuiInputBase-root': {
              height: isMobile ? '32px' : '48px',
              fontSize: isMobile ? '12px' : '18px',
              width: '99%',
             
            },
          }}
        />
      </Box>

      {paginatedRows.map((row, index) => (
        <Box
          key={index}
          sx={{
            padding: isMobile ? '8px' : '16px',
            marginTop: isMobile ? '8px' : '16px',
            marginBottom: isMobile ? '8px' : '16px',
            marginLeft: '8px',
            marginRight: '8px',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            backgroundColor: 'white',
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold" fontSize={isMobile ? '14px' : '18px'}>
              {row.courseName}
            </Typography>
            {row.action}
          </Box>
          <Box display="flex" alignItems="center" gap="4px">
            <HistoryToggleOffIcon style={{ color: 'gray' }} />
            <Typography variant="body2" color="textSecondary" fontSize={isMobile ? '12px' : '14px'}>
              {row.dateTime}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" fontSize={isMobile ? '10px' : '14px'}>
              Score: {row.score}
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: row.status === 'pass' ? 'green' : 'red',
                color: 'white',
                padding: isMobile ? '1px 4px' : '4px 12px',
                fontSize: isMobile ? '8px' : '12px',
              }}
            >
              {row.status.toUpperCase()}
            </Button>
          </Box>
        </Box>
      ))}

      <Box display="flex" justifyContent="center" padding={isMobile ? 1 : 2}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(filteredRows.length / rowsPerPage)}
            page={page}
            onChange={(e, value) => handleChangePage(value)}
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


  const handleChangePage = (value) => {
    setPage(value);
  };

  const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return isMobile ? (
    <MobileOnlyView 
      page={page} 
      rowsPerPage={rowsPerPage} 
      handleChangePage={handleChangePage} 
    />
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
   
      <Box display="flex" justifyContent="center" padding={2}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page}
            onChange={(e, value) => handleChangePage(value)}
          />
        </Stack>
      </Box>
    </Paper>
  );
}
