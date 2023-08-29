import { ChangeEventHandler } from "react";
import { Box, Typography, Divider, TextField } from "tlp-ui-kit";

type EditFormProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  rusWord: string;
  engWord: string;
};

function EditForm({ onChange, rusWord, engWord }: EditFormProps) {
  return (
    <Box bgcolor="#FFFFFF" border="1px solid #DFE4EC" width="100%">
      <Typography
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
          <TextField
            size="small"
            id="rus"
            value={rusWord}
            onChange={onChange}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography>Перевод на английский язык</Typography>
          <TextField size="small" id="eng" value={engWord} onChange={onChange} />
        </Box>
      </Box>
    </Box>
  );
}

export default EditForm;
