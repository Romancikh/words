import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CheckControl from "./CheckControl/CheckControl";
import CheckGame from "./CheckGame/CheckGame";

function Check() {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        gap={3.5}
        alignItems="flex-start"
      >
        <CheckControl />
        <CheckGame />
      </Box>
    </Container>
  );
}

export default Check;
