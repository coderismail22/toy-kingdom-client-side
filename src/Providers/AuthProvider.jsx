import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  };
  

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  
// const logOut = async () => {
//     try {
//       // Step 1: Sign out the user
//       await signOut(auth);

//       // Step 2: Unlink the Google provider from the user account
//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         await currentUser.unlink("google.com");
//       }

//       // Step 3 (optional): Delete the user account
//       // await currentUser.delete();

//       // Rest of your logic after successful logout
//     } catch (error) {
//       // Handle logout error
//       console.log(error.message);
//     }
//   };
// 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, loading, createUser, signIn, googleSignIn, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
