import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "tlp-ui-kit/dist/Button/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="column" gap={3.5}>
        <Typography
          component="h1"
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
