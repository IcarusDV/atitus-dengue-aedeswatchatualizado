import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ token: null });

  // Carregar o token do localStorage quando o componente for montado
  useEffect(() => {
    const savedToken = localStorage.getItem("userToken");
    if (savedToken) {
      setUser({ token: savedToken });
    }
  }, []);

  const login = (token) => {
    // Salvar o token no localStorage e no estado
    localStorage.setItem("userToken", token);
    setUser({ token });
  };

  const logout = () => {
    // Remover o token do localStorage e do estado
    localStorage.removeItem("userToken");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
