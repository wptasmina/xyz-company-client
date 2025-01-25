import { createContext, useEffect, useState } from 'react';
import { 
   createUserWithEmailAndPassword, 
   GoogleAuthProvider,
   onAuthStateChanged, 
   signInWithEmailAndPassword, 
   signInWithPopup, 
   signOut, 
   updateProfile} from "firebase/auth";
import auth from '../Firebase/Firebase.init';


export const AuthContext = createContext()

export default function AuthProvider({children}) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

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

   //LogOut
   const logOut = () =>{
    setLoading(true);
    return signOut(auth)
  }

    // GoogleProvider create
    const Provider = new GoogleAuthProvider(); 

    // GoogleProvider
    const handleGoogleLogin = (e) =>{
      setLoading(true);
      return signInWithPopup(auth, Provider)
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
    logOut,
    updateUserProfile
  }
  
  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </>
  )
}
