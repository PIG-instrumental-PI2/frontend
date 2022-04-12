import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/Global.styled";
import Inspections from "./pages/Inspections";
import CreateInspection from "./pages/CreateInspection/CreateInspection";
import Navbar from "./components/Navbar/Navbar";

const rootElement = document.getElementById("root");

render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inspections />} />
        <Route path="/create" element={<CreateInspection />} />
      </Routes>
    </BrowserRouter>
  </>,
  rootElement
);
