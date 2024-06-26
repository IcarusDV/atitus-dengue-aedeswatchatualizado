import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export function Header() {
  const { logout } = useContext(UserContext);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    setConfirmLogout(true);
  };

  const cancelLogout = () => {
    setConfirmLogout(false);
  };

  const confirmLogoutAction = () => {
    logout();
    setConfirmLogout(false);
  };

  return (
    <header className="headerComponent">
      <img src={logo} alt="" className="logo" />
      {confirmLogout ? (
        <div className="logoutConfirm">
          <p>Você deseja mesmo sair?</p>
          <button onClick={confirmLogoutAction}>Sim</button>
          <button onClick={cancelLogout}>Cancelar</button>
        </div>
      ) : (
        <a href="#" onClick={handleLogout}>
          Sair
        </a>
      )}
    </header>
  );
}
