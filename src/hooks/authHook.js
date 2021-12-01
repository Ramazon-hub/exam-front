// import { useContext, useEffect } from "react";
// import { Auth } from "../context/authentication";
// function useAuth(blabla){
//     const {token,setToken} = useContext(Auth);
//     useEffect(()=>{
 
//         setToken(window.localStorage.getItem("token"))
//     })
//     return blabla ? [token] : [token,setToken]
    
// }
// export default useAuth
import { useContext } from "react";
import { Auth } from "../context/authentication";

const useAuth = (setterOnly) => {
  const { token, setToken } = useContext(Auth);

  return setterOnly ? [setToken] : [token, setToken];
};

export default useAuth;