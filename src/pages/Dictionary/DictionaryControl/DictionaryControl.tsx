import { Link } from "react-router-dom";
import { Box, Button, Icon, Typography } from "tlp-ui-kit";

function DictionaryControl() {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      gap={2.5}
      marginTop={5}
    >
      <Link to="/">
        <Button variant="outlined" padding={1} minWidth="unset">
          <Icon name="NavigateBeforeIcon" />
        </Button>
      </Link>
      <Typography variant="h3" lineHeight={1} color="#364963">
        Словарь
      </Typography>
    </Box>
  );
}

export default DictionaryControl;
