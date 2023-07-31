import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function CheckGame() {
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
        Слово: {2} из {4}
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
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxWidth={502}
        >
          <Typography>Перевод на английский язык</Typography>
          <TextField size="small" />
        </Box>
      </Box>
      <Button variant="contained" sx={{ marginTop: 3 }}>
        проверить
      </Button>
    </Box>
  );
}

export default CheckGame;
