import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CheckControl from "./CheckControl/CheckControl";
import CheckGame from "./CheckGame/CheckGame";
import { useWordsStore } from "../../stores/Words";
import Alert from "@mui/material/Alert";

function Check() {
  const words = useWordsStore((state) => state.words);

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        gap={3.5}
        alignItems="flex-start"
      >
        <CheckControl />
        {words.length > 1 ? (
          <CheckGame />
        ) : (
          <Alert severity="warning">
            Недостаточно слов для проверки знаний
          </Alert>
        )}
      </Box>
    </Container>
  );
}

export default Check;
