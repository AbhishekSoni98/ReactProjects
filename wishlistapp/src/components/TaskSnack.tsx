import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function TaskSnack ({content, severity, open, handleClose}) {
    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ horizontal: "center", vertical: "bottom"}}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {content}
        </Alert>
      </Snackbar>
    );
}

export default TaskSnack;