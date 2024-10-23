import {Button, Stack, styled} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from "react";
import Typography from "@mui/material/Typography";

export default function ContactButtons() {

    const CircularButton = styled(Button)(({theme}) => ({
        borderRadius: '50%',
        width: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    }));

    const handleClick = (event) => {
        let url = '#';
        switch (event.currentTarget.id) {
            case 'linkedin':
                url = "https://www.linkedin.com/in/ptp/"
                break;
            case 'github':
                url = "https://github.com/ptp28"
                break;
            case 'email':
                url = "mailto:parthparikh28@outlook.com"
                break;
            default:
                url = "#";
                break;
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <>
            <Typography sx={{mt: 7, mb: 2}} color="secondary" variant="h4">
                GET IN TOUCH
            </Typography>
            <Stack direction="row" spacing={4}>
                <CircularButton
                    id={'linkedin'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <LinkedInIcon sx={{fontSize: 40}}/>
                </CircularButton>
                <CircularButton
                    id={'email'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <EmailIcon sx={{fontSize: 40}}/>
                </CircularButton>
                <CircularButton
                    itemRef={''}
                    id={'github'}
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    <GitHubIcon sx={{fontSize: 40}}/>
                </CircularButton>
            </Stack>
        </>
    );
}