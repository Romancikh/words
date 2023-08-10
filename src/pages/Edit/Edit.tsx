import Container from "@mui/material/Container";
import EditControl from "./EditControl/EditControl";
import Box from "@mui/material/Box";
import EditForm from "./EditForm/EditForm";
import Button from "tlp-ui-kit/dist/Button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useWordsStore } from "../../stores/Words";
import { ChangeEvent, useState } from "react";
import Alert from "@mui/material/Alert";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const words = useWordsStore((state) => state.words);
  const edit = useWordsStore((state) => state.edit);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const word = words.filter((word) => word.id === id)[0];

  const [rusWord, setRusWord] = useState<string>(word.rus);
  const [engWord, setEngWord] = useState<string>(word.eng);

  if (!id) return <NotFound />;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "rus") {
      setRusWord(event.target.value);
    } else if (event.target.id === "eng") {
      setEngWord(event.target.value);
    }
  };

  const handleEdit = () => {
    if (rusWord && engWord) {
      edit(id, {
        rus: rusWord,
        eng: engWord,
      });
      navigate("/dictionary");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        gap={3.5}
        alignItems="flex-start"
      >
        <EditControl word={word.rus} />
        {showAlert && (
          <Alert
            severity="error"
            onClose={() => {
              setShowAlert(false);
            }}
          >
            Не указана {rusWord ? "английская" : "русская"} версия
          </Alert>
        )}
        <EditForm onChange={handleChange} rusWord={rusWord} engWord={engWord} />
        <Box display="flex" gap={2}>
          <Button variant="contained" onClick={handleEdit}>
            сохранить
          </Button>
          <Link to="/dictionary">
            <Button variant="outlined">отменить</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Edit;
