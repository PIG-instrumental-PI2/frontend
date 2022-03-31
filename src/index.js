import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/Global.styled";
import Inspections from "./pages/Inspections";

const rootElement = document.getElementById("root");

render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Inspections />} />
      </Routes>
    </BrowserRouter>
  </>,
  rootElement
);
