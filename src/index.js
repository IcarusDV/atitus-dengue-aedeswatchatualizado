// Melhorias
// tratar erros de cadastro usuario ja existente
// nao exibir erros usando alert
// confirmar se a pessoa quer cadastrar um ponto de foco antes de cadastrar
// confirmar se o usuario quer realmente fazer logout
// salvar o token do usuario no localstorage
// colocar a logo marca na home

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
