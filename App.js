import React, { useState } from 'react'
import Icon from './Components/Icon'



// import react-toastify 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


// import reactstrap
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"


const tiktacArray =  new Array(9).fill("")

const App =()=> {

    let [isCross, setIsCross] = useState(true)
    
    let[winMessage, setWinMessage] = useState("")

    const playAgain=()=>{

        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")

    }

    const findWinner=()=>{

        return(
            (tiktacArray.fill({3: setIsCross(true)}) === true)? setWinMessage(""): 'You the Winner'
            
        )

    }







    return(
        <div>
            <h1> Hello Welcome to Day 3</h1>
            <h2> This is Tic-Toc-Toe</h2>
            <Icon choice = "cilhdsjde" />
        </div>
    )
}

export default App