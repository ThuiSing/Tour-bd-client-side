import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../firebase/firebaseInit";

//   firebaseInit();
firebaseInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  //sign in with Google
  const googleLogIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  //get current user
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });
  }, []);

  //logOut
  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    setErr,
    err,
    googleLogIn,
    userSignOut,
    isLoading,
  };
};
export default useFirebase;
