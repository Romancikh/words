import { Link } from "react-router-dom";
import { useAnswersStore } from "../../../stores/Answers";
import { Box, Button, Icon, Typography } from "tlp-ui-kit";

function CheckControl() {
  const clearAnswers = useAnswersStore((state) => state.clear);

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      gap={2.5}
      marginTop={5}
    >
      <Link to="/" onClick={clearAnswers}>
        <Button variant="outlined" padding={1} minWidth="unset">
          <Icon name="NavigateBeforeIcon" />
        </Button>
      </Link>
      <Typography variant="h3" lineHeight={1} color="#364963">
        Проверка знаний
      </Typography>
    </Box>
  );
}

export default CheckControl;
