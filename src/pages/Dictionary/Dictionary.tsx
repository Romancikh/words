import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DictionaryControl from "./DictionaryControl/DictionaryControl";
import DictionaryList from "./DictionaryList/DictionaryList";

function Dictionary() {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        gap={3.5}
        alignItems="flex-start"
      >
        <DictionaryControl />
        <Button variant="contained" startIcon={<AddIcon />}>
          Добавить слово
        </Button>
        <DictionaryList />
      </Box>
    </Container>
  );
}

export default Dictionary;
