import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from "@mui/material/IconButton";


function Navbar({mode, toggleTheme}) {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          ToDo App
        </Typography>
        {/* <Button onClick={() => props.setMode('dark')}> <DarkModeIcon  /> </Button> */}
        <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: "auto" }}>
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;