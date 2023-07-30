import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link } from "react-router-dom";

function DictionaryControl() {
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
        Словарь
      </Typography>
    </Box>
  );
}

export default DictionaryControl;
