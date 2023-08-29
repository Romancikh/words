import { Alert, AlertTitle } from "tlp-ui-kit";

function NotFound() {
  return (
    <Alert severity="error">
      <AlertTitle>Error 404</AlertTitle>Page not found
    </Alert>
  );
}

export default NotFound;
