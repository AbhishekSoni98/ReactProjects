import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">© 2026 ToDo App</Typography>
    </Box>
  );
}

export default Footer;