import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationPane from "./NavigationPane/NavigationPane.tsx";
import ContentPane from "./ContentPane/ContentPane.tsx";
import {useEffect, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";


const fontFamilyTitles = 'Saira Extra Condensed, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const fontFamilyOther = 'Mulish, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const typography = {
    h1: {
        fontFamily: fontFamilyTitles,
        fontWeight: 700,
    },
    h2: {
        fontFamily: fontFamilyTitles,
        fontWeight: 700,
    },
    h3: {
        fontFamily: fontFamilyTitles,
        fontWeight: 700,
    },
    h4: {
        fontFamily: fontFamilyTitles,
        fontWeight: 600,
    },
    h5: {
        fontFamily: fontFamilyTitles,
        fontWeight: 600,
    },
    h6: {
        fontFamily: fontFamilyTitles,
        fontWeight: 600,
    },
    fontFamily: fontFamilyOther,
    fontWeight: 400,
};

const lightTheme = createTheme({
    typography: typography,
    palette: {
        mode: 'light',
        primary: {
            main: '#0984e3',
        },
        secondary: {
            main: '#343a40',
        },
    },
});


const darkTheme = createTheme({
    typography: typography,
    palette: {
        mode: 'dark',
        primary: {
            main: '#0984e3',
        },
        secondary: {
            main: '#e2e2e2',
        },
    },
});


function App() {
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            setTheme(event.matches ? darkTheme : lightTheme);
        };
        setTheme(mediaQuery.matches ? darkTheme : lightTheme);
        mediaQuery.addEventListener('change', handleChange);
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{display: 'flex'}}>
                <NavigationPane/>
                <ContentPane/>
            </Box>
        </ThemeProvider>
    );
}

console.log("Source code for this portfolio template can be found here -> https://github.com/ptp28/portfolio-template")

export default App;