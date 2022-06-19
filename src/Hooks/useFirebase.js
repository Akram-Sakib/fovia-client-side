import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  getIdToken,
} from "firebase/auth";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const regeistrationWithName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const regestrationWithEmailPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // Save User to database
        saveUser(email, name, "POST");
        regeistrationWithName(name);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setMsg(errorMessage);
        // ..
      });
  };

  const SignInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const signInUsingEmailAndPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setIsLoading(false);
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://fovia.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  useEffect(() => {
    fetch(`https://fovia.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    token,
    admin,
    user,
    setUser,
    setIsLoading,
    SignInUsingGoogle,
    logOut,
    regestrationWithEmailPassword,
    signInUsingEmailAndPassword,
    isLoading,
    msg,
    saveUser,
  };
};

export default useFirebase;
