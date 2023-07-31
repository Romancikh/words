import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Container from "@mui/material/Container";
import NotFound from "./pages/NotFound/NotFound";
import Dictionary from "./pages/Dictionary/Dictionary";
import Add from "./pages/Add/Add";
import Edit from "./pages/Edit/Edit";
import Check from "./pages/Check/Check";

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{ height: "100%", minHeight: "100vh", background: "#eff2f5" }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="dictionary">
          <Route index element={<Dictionary />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="check" element={<Check />} />
        <Route path="result" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
