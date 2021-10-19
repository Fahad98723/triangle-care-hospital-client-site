import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut ,signInWithEmailAndPassword,updateProfile,FacebookAuthProvider      } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../Firebase/firebase.init.js'

firebaseInitialize()

const  useFirebase =  () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name, setName] = useState('')

    //google sign in 
    const googleSignIn = () => {
       return signInWithPopup(auth,googleProvider)        
    }
    //facebook sign in
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
        
    }
    //with email and pass sign in
    const loginWithEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(auth,email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
        
    }
    //signup with email and pass
    const signupWithEmailAndPass = (email,password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {           
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    setError(error.message)
                  });

        })
        .catch((error) => {
            setError(error.message)
        })
       
    }
    //user data set
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {            
            if (user) {
                setUser(user)
            }
             else {
                setUser({})
            }
            setIsLoading(false)
        })
        
    },[])

    //log out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
          })
          .finally(() => {
            setIsLoading(false)
          })
    }

    return {googleSignIn,user,error, isLoading,signupWithEmailAndPass,loginWithEmailAndPass, setPassword, password, setEmail, email,logOut,setIsLoading,setName, name ,facebookSignIn}
}

export default useFirebase