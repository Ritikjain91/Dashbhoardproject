import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { BiExpand } from "react-icons/bi";
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

function createData(courseName, dateTime, status, score, action) {
  return { courseName, dateTime, status, score, action };
}
const iconStyle = { color: '#FFD700', fontSize: '24px',cursor:'pointer' }; 
const sample = [
  createData('Python for Beginners', '2023-01-15 10:00 AM', 'pass', 150, <BiExpand style={iconStyle} />),
  createData('Advanced Python', '2023-02-20 02:30 PM', 'pass', 220, <BiExpand style={iconStyle} />),
  createData('Python Data Science', '2023-03-10 11:45 AM', 'fail', 175, <BiExpand style={iconStyle} />),
  createData('Python Web Development', '2023-04-05 09:15 AM', 'pass', 190, <BiExpand style={iconStyle} />),
  createData('Python Machine Learning', '2023-05-12 03:00 PM', 'pass', 200, <BiExpand style={iconStyle} />),

];

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
    label: 'Status',
    dataKey: 'status',
  },
  {
    width: 100,
    label: 'Score',
    dataKey: 'score',
    numeric: true,
  },
  {
    width: 80,
    label: 'Action',
    dataKey: 'action',
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return { id: index, ...randomSelection };
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

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
                backgroundColor: row.status === 'black',
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

export default function ReactVirtualizedTable() {
  const theme = useTheme();
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
