import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import logo from "../assets/img/logo.png";
import bg from "../assets/img/gmaps.jpg";
import { UserContext } from "../context/UserContext";

export function Register() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    const endereco = event.target.endereco.value;
    const cpf = event.target.cpf.value;
    const local = event.target.local.value;

    try {
      const response = await fetch(
        "https://denguealerta202401-production.up.railway.app/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, senha, endereco, cpf, local }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.text();
      login(data);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.message); // Define a mensagem de erro no estado errorMessage
    }
  };

  return (
    <>
      <main className="content" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} width="120" className="mb-5" />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form onSubmit={handleSubmitRegister}>
          <input
            type="text"
            placeholder="Nome completo"
            name="nome"
            className="input mb-5"
            required
          />
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
            placeholder="Endereço"
            name="endereco"
            className="input mb-5"
            required
          />
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            className="input mb-5"
            required
          />
          <input
            type="text"
            placeholder="Local"
            name="local"
            className="input mb-5"
            required
          />
          <button type="submit" className="btn mb-5">
            Cadastrar
          </button>
        </form>
        <Link to="/login">Já tem uma conta? Entrar</Link>
      </main>
      <Footer />
    </>
  );
}
