import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactButtons from "./ContactButtons.tsx";
import NameComponent from "./NameComponent.tsx";

export default function AboutPage(props) {


    return (
        <Box sx={{...props.sx}}>

            <NameComponent/>

            <Typography sx={{marginTop: 7, fontSize: 20, fontWeight: "500"}}>
                <br/>
                Graduate student in <b>Computer Science</b> at
                <img
                    src={'neu_logo.png'}
                    alt="Northeastern University Logo"
                    style={{width: '30px', height: 'auto', verticalAlign: 'middle', margin: '0 4px 0 10px'}}
                />
                <Typography sx={{color: '#C8102E', fontSize: 20, fontWeight: "500"}} component={'span'}>Northeastern
                    University, Boston.</Typography>
                <br/>
                SDE intern at SOLIDWORKS, Dassault Systèmes.
                <br/>
                Formerly a Senior Project Technical Researcher at e-Yantra, IIT Bombay.
                <br/>
                Earned a Bachelor's degree in Computer Engineering from Pune University.
                <br/>
                Passionate about expanding knowledge in computer science, technology, and innovative project ideas.
                <br/>
                Enjoy playing tennis and sailing in free time.
                <br/>
            </Typography>

            <ContactButtons/>
        </Box>
    )
}