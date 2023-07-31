import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useWordsStore } from "../../../stores/Words";

function DictionaryList() {
  const words = useWordsStore((state) => state.words);

  return (
    <TableContainer sx={{ height: "80vh" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ background: "#DFE4EC" }}>
              Слово на русском языке
            </TableCell>
            <TableCell sx={{ background: "#DFE4EC" }}>
              Перевод на английский язык
            </TableCell>
            <TableCell sx={{ background: "#DFE4EC" }} align="right">
              Действие
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "#FFFFFF" }}>
          {words.map((word) => (
            <TableRow key={word.id}>
              <TableCell>{word.rus}</TableCell>
              <TableCell>{word.eng}</TableCell>
              <TableCell align="right">
                <BurgerMenu id={word.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DictionaryList;
