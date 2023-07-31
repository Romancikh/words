import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Typography from "@mui/material/Typography";

function CheckControl() {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      gap={2.5}
      marginTop={5}
    >
      <Link to="/">
        <Button variant="outlined" sx={{ padding: 1, minWidth: "unset" }}>
          <NavigateBeforeIcon />
        </Button>
      </Link>
      <Typography component="h1" variant="h3" lineHeight={1} color="#364963">
        Проверка знаний
      </Typography>
    </Box>
  );
}

export default CheckControl;
