import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { saveUser } from "../auth/users";

export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(user)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // saveUser(currentUser)
      // console.log("CurrentUser: ", currentUser);
      if (currentUser?.email) {
        fetch(`${import.meta.env.VITE_API_URL}/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: currentUser?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("access-token", data?.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user, 
    createUser,
    updateUserProfile,
    signIn,
    logOut,
    setLoading,
    loading,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProviders;
