import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Styles.css';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';



function SignPage(){
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const checkUser = (emailAddress, password) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailAddress, password)
          .then((userCredential) => {

            const user = userCredential.user.uid;
            console.log("user checked: " + user)
            navigate('/form')
            // ...
          })
          .catch((error) => {


            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("error: " + errorCode + " message: " + errorMessage)
          });        
    }
    return (
        <>
        <div className = 'splitHorizontal'>
            <div className = 'rightSide'>
                <div className = 'splitVertical'>
                   <div className = "centerBox">
                        <h3> WELCOME </h3>
                            <div className = "spacing">

                                <TextField fullWidth margin = "normal" id = "standard-basic" label = "email address*" variant = "outlined"
                                value = {emailAddress} onChange = {(event) => {setEmailAddress(event.target.value)}} /> 

                                <TextField fullWidth margin = "normal" id = "standard-basic" label = "password*" variant = "outlined"
                                value = {password} onChange = {(event) => {setPassword(event.target.value)}} />

                                <p1> don't have an account? </p1>
                                <Link to = '/create'>
                                    <Button variant = "text" size = "small"> sign up </Button>
                                </Link>



                                <br></br>

                                <Button variant = "outlined" size = "small"  onClick={() => { checkUser(emailAddress, password) }}> sign in </Button>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignPage;