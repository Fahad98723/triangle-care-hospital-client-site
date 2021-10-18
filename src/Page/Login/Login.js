import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import { useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Login.css'
const Login = () => {
    const {googleSignIn,error,setEmail, setPassword, email, password,loginWithEmailAndPass,setError,setIsLoading,signupWithEmailAndPass,name,setName,facebookSignIn} = useAuth()

    const location = useLocation()
    const path_url = location?.state?.from?.pathname
    const history = useHistory()
    const [toggle , setToggle] = useState(false)
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleToggle = e => {
        setToggle(e.target.checked)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }

    const emailAndPassSignIn = () => {
        loginWithEmailAndPass(email,password)
    }

    const emailAndPassSignUp = () => {
        signupWithEmailAndPass(email, password,name)
    }
    const formHandle  = e => {
        e.preventDefault()        
        toggle ? emailAndPassSignUp(email, password) : emailAndPassSignIn(email, password)
      
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            if (path_url) {
                history.push(path_url)
            }
            else{
                history.push('/')
            }
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }
    return (
        <Container className= 'text-center py-5'>
            <form onSubmit= {formHandle}>
                {
                    toggle && <input onBlur={handleName} className= 'py-1 mb-3' type="text" name="name" id="" placeholder='Your Name' />
                }
                <br />
                <input onBlur={handleEmail} className= 'py-1 mb-3' type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input onBlur={handlePassword} className= 'py-1 mb-3' type="password" name="password" id="" placeholder='Your Password' />
                <br />
                <input className='btn btn-success mb-3' type="submit" value={toggle ? "Signup":"Login"} />
                <br />
                <input onChange={handleToggle} className="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" for="flexCheckChecked">
                    Or Sign Up Using
                </label>
            </form>
            <h5 className='text-danger mt-2'>{error}</h5>
            <i onClick = {handleGoogleSignIn} className="fab fa-google fs-4"></i>
            <i onClick={facebookSignIn}  className="fa fa-facebook-square fs-3 ms-3"></i>
        </Container>
    );
};

export default Login;