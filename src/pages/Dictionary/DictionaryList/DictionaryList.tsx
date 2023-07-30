import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function DictionaryList() {
  return (
    <TableContainer>
      <Table>
        <TableHead sx={{ background: "#DFE4EC" }}>
          <TableRow>
            <TableCell>Слово на русском языке</TableCell>
            <TableCell>Перевод на английский язык</TableCell>
            <TableCell align="right">Действие</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "#FFFFFF" }}>
          <TableRow>
            <TableCell>Автомобиль</TableCell>
            <TableCell>Car</TableCell>
            <TableCell align="right">
              <BurgerMenu />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DictionaryList;
