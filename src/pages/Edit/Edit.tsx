import Container from "@mui/material/Container";
import EditControl from "./EditControl/EditControl";
import Box from "@mui/material/Box";
import EditForm from "./EditForm/EditForm";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

function Edit() {
  const { id } = useParams<{ id: string }>();

  return id ? (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        gap={3.5}
        alignItems="flex-start"
      >
        <EditControl id={id} />
        <EditForm />
        <Box display="flex" gap={2}>
          <Button variant="contained">сохранить</Button>
          <Link to="/dictionary">
            <Button variant="outlined">отменить</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  ) : (
    <NotFound />
  );
}

export default Edit;
