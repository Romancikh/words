import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function NotFound() {
  return (
    <Alert severity="error">
      <AlertTitle>Error 404</AlertTitle>Page not found
    </Alert>
  );
}

export default NotFound;
