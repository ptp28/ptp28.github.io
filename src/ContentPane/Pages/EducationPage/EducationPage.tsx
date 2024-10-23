import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SchoolIcon from '@mui/icons-material/School';
import {Stack} from "@mui/material";
import EducationHistory from "./EducationHistory.tsx";


export default function EducationPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{mb: 5}} color="primary" variant="h3">
                <SchoolIcon sx={{fontSize: 30}}/> EDUCATION
            </Typography>

            <Stack direction="column" spacing={5}>

                <EducationHistory
                    instituteName={'Khoury College of Computer Science, Northeastern University'}
                    degree={'Master of Science in Computer Science'}
                    studyDuration={'September 2022 - December 2024'}
                    description={'Subjects :' +
                        'Programming Design Paradigms, ' +
                        'Foundations of AI, ' +
                        'Algorithms, ' +
                        'Mobile App Design, ' +
                        'Computer Graphics, ' +
                        'Principles of Programming Languages, ' +
                        'Scalable Distributed Systems, ' +
                        'Information Retrieval.'}
                    grade={'3.8/4.0 GPA'}
                    honors={''}
                    extras={'Teaching Assistant for CS5010 Programming Design Paradigms'}
                />

                <EducationHistory
                    instituteName={'Savitribai Phule Pune University'}
                    degree={'Bachelor of Engineering (Computer Engineering)'}
                    studyDuration={'July 2016 - August 2020'}
                    description={'Subjects :' +
                        'System Programming & Operating Systems,' +
                        ' Embedded Systems & IOT, ' +
                        'Microprocessor, ' +
                        'Software Engineering, ' +
                        'Data Analytics, ' +
                        'Theory of Computation, ' +
                        'Computer Graphics, ' +
                        'Computer Networks, ' +
                        'Database Management Systems, ' +
                        'Soft Computing and Optimisation of Algorithms, ' +
                        'Machine Learning, ' +
                        'Cloud Computing, ' +
                        'High Performance Computing.'}
                    grade={'8.4/10 GPA'}
                    honors={''}
                    extras={''}
                />
            </Stack>
        </Box>
    )
}