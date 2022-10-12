import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function FormPage() {

    const [favoriteColor, setFavoriteColor] = useState("")
    const [favoriteBrand, setFavoriteBrand] = useState("")
    const [coffee, setCoffee] = useState("")
    const [pastTime, setPastTime] = useState("")
    const [videoGame, setVideoGame] = useState("")

    const exportPDF = () => {

        print()
    }

    return (
        <>

            <h3> Fill in form </h3>

            <TextField fullWidth margin = "normal" id = "standard-basic" label = "what is your favorite color" variant = "outlined"
            value = {favoriteColor} onChange = {(event) => {setFavoriteColor(event.target.value)}} />

            <TextField fullWidth margin = "normal" id = "standard-basic" label = "what is your favorite brand" variant = "outlined"
            value = {favoriteBrand} onChange = {(event) => {setFavoriteBrand(event.target.value)}}/>

            <TextField fullWidth margin = "normal" id = "standard-basic" label = "do you like coffee?" variant = "outlined"
            value = {coffee} onChange = {(event) => {setCoffee(event.target.value)}} /> 

            <TextField fullWidth margin = "normal" id = "standard-basic" label = "favorite past time" variant = "outlined"
            value = {pastTime} onChange = {(event) => {setPastTime(event.target.value)}} />

            <TextField fullWidth margin = "normal" id = "standard-basic" label = "favorite video game" variant = "outlined"
            value = {videoGame} onChange = {(event) => {setVideoGame(event.target.value)}} />

            <Button variant = "outlined" size = "small"  onClick={() => { exportPDF() }}> export as pdf </Button>
        </>
    )
}

export default FormPage;