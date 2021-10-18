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
    const googleSignIn = () => {
       return signInWithPopup(auth,googleProvider)        
    }
    const facebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
        .then(result => {

        })
        .catch(error => {
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