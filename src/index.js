import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/Global.styled";
import App from "./pages/App";

const rootElement = document.getElementById("root");

render(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>,
  rootElement
);
