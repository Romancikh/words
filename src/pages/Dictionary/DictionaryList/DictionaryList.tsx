import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useWordsStore } from "../../../stores/Words";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "tlp-ui-kit";

function DictionaryList() {
  const words = useWordsStore((state) => state.words);

  return (
    <TableContainer height="80vh">
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell background="#DFE4EC">
              Слово на русском языке
            </TableCell>
            <TableCell background="#DFE4EC">
              Перевод на английский язык
            </TableCell>
            <TableCell background="#DFE4EC" align="right">
              Действие
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody background="#FFFFFF">
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
