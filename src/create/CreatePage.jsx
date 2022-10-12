import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Styles.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import  db from '../assets/FirebaseComp'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function CreatePage(){
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const navigate = useNavigate();

    const sendData = async (emailAddress, password, user, firstName, lastName) => {

        await setDoc(doc(db, "users", user), {

            userID: user,
            email: emailAddress,
            password: password,
            firstName: firstName,
            lastName: lastName
            
        })

        console.log("done uploading")
        navigate('/form')
    }

    const createAuth =  (emailAddress, password, firstName, lastName) => {

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((userCredential) => {
            
                const user = userCredential.user.uid;
                console.log("user created: " + user)
                sendData(emailAddress, password, user, firstName, lastName)
            
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
                                
                                <TextField fullWidth margin = "normal" id = "standard-basic" label = "first name*" variant = "outlined"
                                value = {firstName} onChange = {(event) => {setFirstName(event.target.value)}} />
                                <TextField fullWidth margin = "normal" id = "standard-basic" label = "last name*" variant = "outlined"
                                value = {lastName} onChange = {(event) => {setLastName(event.target.value)}}/>
                                <TextField fullWidth margin = "normal" id = "standard-basic" label = "email address*" variant = "outlined"
                                value = {emailAddress} onChange = {(event) => {setEmailAddress(event.target.value)}} /> 
                                <TextField fullWidth margin = "normal" id = "standard-basic" label = "password*" variant = "outlined"
                                value = {password} onChange = {(event) => {setPassword(event.target.value)}} />

                                <p1> have an account? </p1>
                                <Link to = "/">
                                    <Button variant = "text" size = "small"> sign in </Button>
                                </Link>
                                
                                <br></br>
                                
                                <Button variant = "outlined" size = "small"  onClick={() => { createAuth(emailAddress, password, firstName, lastName) }}> sign up </Button>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePage;