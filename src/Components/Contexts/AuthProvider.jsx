import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email,password)=> {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogIn =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateNamePhoto =(displayName, photoURL)=> {
        return updateProfile( auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    const logOut = ()=> {
        setLoading(true)
        return signOut(auth)
    }

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unsubscribe()
},[])

    const info = {
        user,
        loading,
        Login,
        createUser,
        googleLogIn,
        logOut,
        updateNamePhoto,
    }
    return (
        <div>
             <AuthContext.Provider value={info}>
                {children}
             </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;