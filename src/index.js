
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css'
const mode = "light";
const themeColor = "primary";

const colors = {
  main: {
    primary: "#1976d2",
    grey: "#8592A3",
    success: "#01cd00",
    error: "#f60400",
    warning: "#FFAB00",
    info: "#03C3EC",
    section: "#13455b",
  },
  light: {
    primary: "#8082FF",
    grey: "#97A2B1",
    success: "#e7ffe7",
    error: "#ffe5e6",
    warning: "#FFB826",
    info: "#29CCEF",
    section: "#f8f9fc",
  },
  dark: {
    primary: "#1565c0",
    grey: "#798594",
    success: "#489744",
    error: "#952e29",
    warning: "#E89C00",
    info: "#03B1D7",
    section: "#13455b",
  },
};

const themeOptions = createTheme({
  typography: {
    fontFamily: [
      '"Public Sans"',
      "san-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  shape: {
    borderRadius: 6,
  },
  palette: {
    mode,
    primary: {
      main: colors.main[themeColor],
      light: colors.light[themeColor],
      dark: colors.dark[themeColor],
      contrastText: "#fff",
    },
    grey: {
      main: colors.main["grey"],
      light: colors.light["grey"],
      dark: colors.dark["grey"],
      contrastText: "#fff",
    },
    success: {
      main: colors.main["success"],
      light: colors.light["success"],
      dark: colors.dark["success"],
      contrastText: "#fff",
    },
    error: {
      main: colors.main["error"],
      light: colors.light["error"],
      dark: colors.dark["error"],
      contrastText: "#fff",
    },
    warning: {
      main: colors.main["warning"],
      light: colors.light["warning"],
      dark: colors.dark["warning"],
      contrastText: "#fff",
    },
    info: {
      main: colors.main["info"],
      light: colors.light["info"],
      dark: colors.dark["info"],
      contrastText: "#fff",
    },
    section: {
      main: colors.main["section"],
      light: colors.light["section"],
      dark: colors.dark["section"],
      contrastText: "#3a3b45",
    },
    ...(mode === "light"
      ? {
          background: {
            paper: "#ffffff",
            default: "#f5f5f9",
          },
          text: {
            primary: "rgba(55, 71, 92, 1)!important",
            secondary: "rgba(55, 71, 92, 0.6)!important",
          },
        }
      : {
          background: {
            paper: "#2b2c40",
            default: "#232333",
          },
          text: {
            primary: "rgba(219, 219, 235, 0.87)",
            secondary: "rgba(219, 219, 235, 0.6)",
          },
        }),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 6,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          height: 24,
        },
        root: {
          height: 24,
          "&.MuiChip-rounded": {
            borderRadius: "4px",
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        columnHeaders: {
          borderTop: "1px solid rgba(50, 71, 92, 0.12)",
          borderRadius: 0,
        },
        root: {
          border: 0,
          borderRadius: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          marginBottom: "0px !important",
        },
        contained: {
          color: "#fff!important",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            height: 15,
            width: 15,
          },
          "&.Mui-disabled": {
            input: {
              opacity: "0 !important",
            },
          },
        },
      },
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={themeOptions}>
    <CssBaseline />
    <App />
  </ThemeProvider>

);
