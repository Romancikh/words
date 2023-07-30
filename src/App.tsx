import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Container from "@mui/material/Container";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Container maxWidth={false} className="app">
      <Routes>
        <Route index element={<Home />} />
        <Route path="dictionary">
          <Route index />
          <Route path="add" />
          <Route path="edit" />
        </Route>
        <Route path="check" />
        <Route path="result" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
