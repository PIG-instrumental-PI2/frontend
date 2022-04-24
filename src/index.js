import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/Global.styled";
import Inspections from "./pages/Inspections/Inspections";
import CreateInspection from "./pages/CreateInspection/CreateInspection";
import Graphs from "./pages/Graphs/Graphs";
import Navbar from "./components/Navbar/Navbar";
import Groups from "./pages/Groups/Groups";

const rootElement = document.getElementById("root");

render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inspections />} />
        <Route path="/create" element={<CreateInspection />} />
        <Route path="/graphs/:id" element={<Graphs />} />
        <Route path="/groups/:id" element={<Groups />} />
      </Routes>
    </BrowserRouter>
  </>,
  rootElement
);
