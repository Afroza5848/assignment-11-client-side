import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios'
// import { GithubAuthProvider } from 'firebase/auth';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // set user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout
    const logOut = async() => {
        setLoading(true);
        const {data} = await axios.get('http://localhost:5000/logOut', {withCredentials: true})
        console.log(data);
        return signOut(auth);
    }
    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async() => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

   
    const createUpdateProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }



    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            const loggedUser = { email: currentUser.email}
            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedUser, {
                    withCredentials: true})
                    .then(res => {
                        console.log('token response',res.data);
                    })
            }
        })
        return () => {
            unSubscribe()
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        logOut,
        googleLogin,
        createUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;



