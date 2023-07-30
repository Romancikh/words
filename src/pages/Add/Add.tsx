import Container from "@mui/material/Container";
import AddControl from "./AddControl/AddControl";
import Box from "@mui/material/Box";
import AddForm from "./AddForm/AddForm";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Add() {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        gap={3.5}
        alignItems="flex-start"
      >
        <AddControl />
        <AddForm />
        <Box display="flex" gap={2}>
          <Button variant="contained">сохранить</Button>
          <Link to="/dictionary">
            <Button variant="outlined">отменить</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Add;
