import { Link } from "react-router-dom";
import { Container, Box, Typography, Button } from "tlp-ui-kit";

function Home() {
  return (
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="column" gap={3.5}>
        <Typography
          variant="h3"
          lineHeight={1}
          marginTop={5}
          color="#364963"
        >
          Выберите режим
        </Typography>
        <Box display="flex" gap={2}>
          <Link to="/dictionary">
            <Button variant="contained">заполнить словарь</Button>
          </Link>
          <Link to="/check">
            <Button variant="outlined">проверить знания</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
