import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useAnswersStore } from "../../stores/Answers";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Answer } from "../../types/Answer";
import { useEffect, useState } from "react";

function getCorrectNumber(answers: Answer[]): number {
  return answers.filter((answer) => answer.isCorrect).length;
}

function Result() {
  const answers = useAnswersStore((state) => state.answers);
  const clearAnswers = useAnswersStore((state) => state.clear);
  const [correctNumber, setCorrectNumber] = useState(0);

  useEffect(() => {
    setCorrectNumber(() => getCorrectNumber(answers));
  }, [answers]);

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
          Результат проверки знаний
        </Typography>
        <Box
          bgcolor="#FFFFFF"
          padding={2}
          display="flex"
          flexDirection="column"
          width={300}
        >
          <Typography color="#296DC2" variant="h6" lineHeight={1.5}>
            Ответы
          </Typography>
          <Box display="flex" flexDirection="column">
            <ListItem divider>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="success" />
              </ListItemIcon>
              <ListItemText>Правильные</ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                {correctNumber}
              </ListItemText>
            </ListItem>
            <ListItem divider>
              <ListItemIcon>
                <CancelOutlinedIcon color="error" />
              </ListItemIcon>
              <ListItemText>Ошибочные</ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                {answers.length - correctNumber}
              </ListItemText>
            </ListItem>
            <ListItem divider>
              <ListItemIcon>
                <AutoStoriesIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>Всего слов</ListItemText>
              <ListItemText sx={{ textAlign: "right" }}>
                {answers.length}
              </ListItemText>
            </ListItem>
          </Box>
        </Box>
        <Box display="flex" gap={2}>
          <Link to="/check" onClick={clearAnswers}>
            <Button variant="contained">проверить знания еще раз</Button>
          </Link>
          <Link to="/" onClick={clearAnswers}>
            <Button variant="outlined">вернуться в начало</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Result;
