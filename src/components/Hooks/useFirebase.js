import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // sign in with google

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    };

    //observe state change 

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unSubscribed;
    }, [])


    //signOut 

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    return {
        signInUsingGoogle,
        user,
        setUser,
        error,
        setError,
        isLoading,
        setIsLoading,
        logOut
    }
};

export default useFirebase;