// import { createContext } from "react";

// const AuthContext = createContext(null)

// export default AuthContext;



import { createContext } from "react"
import AuthProvider from "./AuthProvider"
 
const AuthContext =() => {
    const auth = createContext(AuthProvider)
        return auth
 }
 
 export default AuthContext



// import { useContext } from "react";
// import { AuthProvider } from './../Context/AuthContext';

// const useAuth = () => {
//     const auth = useContext(AuthProvider)
//     return auth
// };

// export default useAuth;