import { createContext, useEffect, useState } from 'react';
import { 
   createUserWithEmailAndPassword, 
   GoogleAuthProvider,
   onAuthStateChanged, 
   signInWithEmailAndPassword, 
   signInWithPopup, 
   signOut } from "firebase/auth";
import auth from '../Firebase/Firebase.init';


export const AuthContext = createContext()

export default function AuthProvider({children}) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  // Register
  const handleRegister = ( email, password ) =>{
    // console.log(auth)
    setLoading(true);
    return createUserWithEmailAndPassword( auth, email, password )
  }
  //Login
  const handleLogin = ( email, password) =>{
    setLoading(true);
   return signInWithEmailAndPassword(auth, email, password)

  }
    // GoogleProvider create
    const Provider = new GoogleAuthProvider(); 

    // GoogleProvider
    const handleGoogleLogin = (e) =>{
      setLoading(true);
      return signInWithPopup(auth, Provider)
    }

  //LogOut
  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);


  const authInfo = {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    signOutUser
  }
  
  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
