import Box from "@mui/material/Box";
import Button from "tlp-ui-kit/dist/Button/Button";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Typography from "@mui/material/Typography";

type EditControlProps = {
  word: string;
};

function EditControl({ word }: EditControlProps) {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      gap={2.5}
      marginTop={5}
    >
      <Link to="/dictionary">
        <Button variant="outlined" padding={1} minWidth="unset">
          <NavigateBeforeIcon />
        </Button>
      </Link>
      <Typography component="h1" variant="h3" lineHeight={1} color="#364963">
        Редактирование слова "{word}"
      </Typography>
    </Box>
  );
}

export default EditControl;
