import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Container from "@mui/material/Container";
import NotFound from "./pages/NotFound/NotFound";
import Dictionary from "./pages/Dictionary/Dictionary";
import Add from "./pages/Add/Add";
import Edit from "./pages/Edit/Edit";

function App() {
  return (
    <Container maxWidth={false} className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="dictionary">
          <Route index element={<Dictionary />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="check" />
        <Route path="result" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
