import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "tlp-ui-kit/dist/Button/Button";
import { useWordsStore } from "../../stores/Words";
import AddControl from "./AddControl/AddControl";
import AddForm from "./AddForm/AddForm";

function Add() {
  const navigate = useNavigate();
  const add = useWordsStore((state) => state.add);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [rusWord, setRusWord] = useState<string>("");
  const [engWord, setEngWord] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "rus") {
      setRusWord(event.target.value);
    } else if (event.target.id === "eng") {
      setEngWord(event.target.value);
    }
  };

  const handleAdd = () => {
    if (rusWord && engWord) {
      add({
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
        <AddControl />
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
        <AddForm onChange={handleChange} />
        <Box display="flex" gap={2}>
          <Button variant="contained" onClick={handleAdd}>
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

export default Add;
