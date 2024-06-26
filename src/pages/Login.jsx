import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import logo from "../assets/img/logo.png";
import bg from "../assets/img/gmaps.jpg";
import { UserContext } from "../context/UserContext";

export function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    fetch("https://denguealerta202401-production.up.railway.app/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Usuário ou senha incorretos");
        }
        return response.text();
      })
      .then((data) => {
        login(data);
        navigate("/home");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <main className="content" style={{ backgroundImage: `url(${bg})` }}>
        <img src={logo} width="120" className="mb-5" />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form onSubmit={handleSubmitLogin}>
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
