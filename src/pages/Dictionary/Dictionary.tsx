import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DictionaryControl from "./DictionaryControl/DictionaryControl";
import DictionaryList from "./DictionaryList/DictionaryList";
import { Link } from "react-router-dom";
import { useWordsStore } from "../../stores/Words";

function Dictionary() {
  const words = useWordsStore((state) => state.words);

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        gap={3.5}
        alignItems="flex-start"
      >
        <DictionaryControl />
        <Link to="add">
          <Button variant="contained" startIcon={<AddIcon />}>
            Добавить слово
          </Button>
        </Link>
        {words.length > 0 && <DictionaryList />}
      </Box>
    </Container>
  );
}

export default Dictionary;
