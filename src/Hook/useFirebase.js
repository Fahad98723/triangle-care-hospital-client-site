import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut ,signInWithEmailAndPassword    } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from '../Firebase/firebase.init.js'

firebaseInitialize()

const  useFirebase =  () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const googleSignIn = () => {
       return signInWithPopup(auth,googleProvider)        
    }

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

    const signupWithEmailAndPass = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user)            
        })
        .catch((error) => {
            setError(error.message)
        })
       
    }

    const loginWithEmailAndPass = (email, password) => {
        signInWithEmailAndPassword(auth,email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
        
    }
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

    return {googleSignIn,user,error, isLoading,signupWithEmailAndPass,loginWithEmailAndPass, setPassword, password, setEmail, email,logOut,setIsLoading }
}

export default useFirebase