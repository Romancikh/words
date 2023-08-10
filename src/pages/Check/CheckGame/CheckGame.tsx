import Box from "@mui/material/Box";
import Button from "tlp-ui-kit/dist/Button/Button";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useWordsStore } from "../../../stores/Words";
import { useAnswersStore } from "../../../stores/Answers";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Word } from "../../../types/Word";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

function mixList<T>(list: T[]): T[] {
  const mixedList = [...list];
  for (let i = mixedList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mixedList[i], mixedList[j]] = [mixedList[j], mixedList[i]];
  }
  return mixedList;
}

function CheckGame() {
  const words = useWordsStore((state) => state.words);
  const addAnswer = useAnswersStore((state) => state.add);
  const [mixedWords, setMixedWords] = useState<Word[]>([]);

  const [wordIndex, setWordIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSelectDisables, setIsSelectDisables] = useState(false);
  const [isCheckDisables, setIsCheckDisables] = useState(false);
  const [isNextShown, setIsNextShown] = useState(false);
  const [isResultShown, setIsResultShown] = useState(false);

  const handleCheck = () => {
    const isCorrect = selected === mixedWords[wordIndex].eng;
    setIsSelectDisables(() => true);
    setIsCheckDisables(() => true);
    if (wordIndex < mixedWords.length - 1) {
      setIsNextShown(() => true);
    } else {
      setIsResultShown(() => true);
    }
    if (isCorrect) {
      setShowSuccess(() => true);
    } else {
      setShowError(() => true);
    }
    addAnswer({
      rus: mixedWords[wordIndex].rus,
      eng: mixedWords[wordIndex].eng,
      isCorrect,
    });
  };

  const handleNext = () => {
    setIsSelectDisables(() => false);
    setIsCheckDisables(() => false);
    setIsNextShown(() => false);
    setShowSuccess(() => false);
    setShowError(() => false);
    setWordIndex((wordIndex) => wordIndex + 1);
    setSelected(() => "");
  };

  useEffect(() => {
    setMixedWords(mixList(words));
  }, [words]);

  useEffect(() => {
    const engWords = mixList(mixedWords.map((word) => word.eng));
    setOptions([...engWords]);
  }, [mixedWords]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="flex-start"
    >
      <Typography
        fontSize={14}
        lineHeight={1.71}
        color="#476185"
        fontWeight={700}
      >
        Слово: {wordIndex + 1} из {mixedWords.length}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="#FFFFFF"
        border="1px solid #DFE4EC"
        width="100%"
        padding={3}
        gap={2}
        marginTop={2}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxWidth={502}
        >
          <Typography>Слово на русском языке</Typography>
          <Box
            width="100%"
            bgcolor="#EFF2F5"
            height={40}
            borderRadius={1}
            maxWidth={220}
            padding={1}
          >
            {mixedWords.length > 0 && mixedWords[wordIndex].rus}
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxWidth={502}
        >
          <Typography>Перевод на английский язык</Typography>
          <Select
            size="small"
            fullWidth
            value={selected}
            disabled={isSelectDisables}
            sx={{ maxWidth: 220 }}
            onChange={(event) => {
              setSelected(event.target.value);
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>
        {showSuccess && <Alert severity="success">Успех</Alert>}
        {showError && (
          <Alert severity="error">
            Ошибка {mixedWords[wordIndex].rus} — это {mixedWords[wordIndex].eng}
          </Alert>
        )}
      </Box>
      <Box display="flex" gap={2}>
        <Button
          variant="contained"
          disabled={isCheckDisables}
          onClick={handleCheck}
          marginTop={3}
        >
          проверить
        </Button>
        {isNextShown && (
          <Button
            variant="contained"
            onClick={handleNext}
            marginTop={3}
          >
            дальше
          </Button>
        )}
        {isResultShown && (
          <Link to="/result">
            <Button
              variant="contained"
              color="success"
              onClick={handleNext}
              marginTop={3}
            >
              результат
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}

export default CheckGame;
