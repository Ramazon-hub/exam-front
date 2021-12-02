
import { useContext } from "react";
import { Auth } from "../context/authentication";

const useAuth = (setterOnly) => {
  const { token, setToken } = useContext(Auth);

  return setterOnly ? [setToken] : [token, setToken];
};

export default useAuth;