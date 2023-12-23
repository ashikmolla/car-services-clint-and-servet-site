import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }









    //  checack user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current User in auth', currentUser);
            setLoading(false);


            // jwt start
            if (currentUser && currentUser.email) {

                const loggedUser = {
                    email: currentUser.email
                }
                fetch('https://my-car-doctors-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("jwt", data)

                        // warning : local storage is not the best (second best place) to stores token
                        localStorage.setItem('car-access-token', data.token);
                    })
            } else {
                localStorage.removeItem('car-access-token'); F
            }
            // jwt end
        });


        return () => {
            return unsubscribe();
        }
    }, [])


    // sign Out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }






    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;