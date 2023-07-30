import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="column" className="home">
        <Typography
          component="h1"
          variant="h3"
          lineHeight={1}
          marginTop={5}
          color="#364963"
          className="home__title"
        >
          Выберите режим
        </Typography>
        <Box display="flex" gap={2} marginTop={3.5}>
          <Link to="dictionary">
            <Button
              variant="contained"
              className="home__button home__button_primary"
            >
              заполнить словарь
            </Button>
          </Link>
          <Link to="check">
            <Button
              variant="outlined"
              className="home__button home__button_secondary"
            >
              проверить знания
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
