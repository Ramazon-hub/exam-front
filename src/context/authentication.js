
const { createContext, useState, useEffect } = require("react");

const Auth = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);

  return <Auth.Provider value={{ token, setToken }}>{children}</Auth.Provider>;
};

export { Auth, Provider };