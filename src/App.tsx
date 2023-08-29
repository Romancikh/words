import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Dictionary from "./pages/Dictionary/Dictionary";
import Add from "./pages/Add/Add";
import Edit from "./pages/Edit/Edit";
import Check from "./pages/Check/Check";
import Result from "./pages/Result/Result";
import { Container } from "tlp-ui-kit";

function App() {
  return (
    <Container
      maxWidth={false}
      height="100%"
      minHeight="100vh"
      background="#eff2f5"
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="dictionary">
          <Route index element={<Dictionary />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="check" element={<Check />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
