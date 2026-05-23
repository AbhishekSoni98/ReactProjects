import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar"
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { useMemo, useState } from 'react';
import React from 'react';
import { PaletteMode } from "@mui/material";


function App() {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  // if (!mode) {
  //   return null;
  // }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Navbar mode={mode} toggleTheme={toggleTheme} />
        {/* <Sidebar props={drawerWidth} /> */}

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Toolbar />
          <MainContent />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
