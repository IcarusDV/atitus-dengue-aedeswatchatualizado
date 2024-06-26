import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import logo from "../assets/img/logo.png";
import bg from "../assets/img/gmaps.jpg";

export function Login() {
  const [cpf, setCpf] = useState("");

  // Função para aplicar a máscara ao CPF
  const handleCpfChange = (event) => {
    let formattedCpf = event.target.value
      .replace(/\D/g, "") // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, "$1.$2") // Coloca ponto após o terceiro dígito
      .replace(/(\d{3})(\d)/, "$1.$2") // Coloca ponto após o sexto dígito
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca hífen antes dos últimos dois dígitos
    setCpf(formattedCpf);
  };

  return (
    <>
      <main className="content" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} width="120" className="mb-5" alt="Logo" />

        <form>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            className="input mb-5"
            required
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            name="senha"
            className="input mb-5"
            required
          />
          <input
            type="text"
            placeholder="Seu CPF"
            name="cpf"
            className="input mb-5"
            maxLength={14} // Limita o tamanho do campo para evitar que o usuário insira mais caracteres que o necessário
            value={cpf}
            onChange={handleCpfChange} // Aplica a máscara ao CPF conforme o usuário digita
            required
          />
          <button type="submit" className="btn mb-5">
            Entrar
          </button>
        </form>

        <Link to="/register">Criar conta</Link>
      </main>

      <Footer />
    </>
  );
}
