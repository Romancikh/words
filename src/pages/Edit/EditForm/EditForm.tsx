import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function EditForm() {
  return (
    <Box bgcolor="#FFFFFF" border="1px solid #DFE4EC" width="100%">
      <Typography
        component="h2"
        variant="h5"
        color="#364963"
        marginY={2}
        marginX={3}
      >
        Словарное слово
      </Typography>
      <Divider />
      <Box
        padding={3}
        display="flex"
        flexDirection="column"
        gap={2}
        maxWidth={550}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>Слово на русском языке</Typography>
          <TextField size="small" required />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>Перевод на английский язык</Typography>
          <TextField size="small" required />
        </Box>
      </Box>
    </Box>
  );
}

export default EditForm;
