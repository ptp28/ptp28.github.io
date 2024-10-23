import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {Stack} from "@mui/material";
import CompanyComponent from "./CompanyComponent.tsx";


export default function WorkExpPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{mb: 5}} color="primary" variant="h3">
                <BusinessCenterIcon sx={{fontSize: 30}}/> WORK EXPERIENCE
            </Typography>

            <Stack direction="column" spacing={5}>

                <CompanyComponent
                    companyName={"SOLIDWORKS, Dassault Systèmes"}
                    workDescription={
                        [
                            {
                                "title": "Software Development Engineer (Intern)",
                                "duration": "January 2024 - July 2024",
                                "description": [
                                    "Rewrote a legacy crash analytics tracker to a full-stack web app that is 60% faster. Collaborated with stakeholders to implement new features to the dashboard. Used caching and data management techniques for performance.",
                                    "Introduce automations and optimisation to the feedback system DevOps pipeline for SolidWorks desktop. Assisted in the migration of VMs and build machines from CentOS to RHEL."
                                ],
                            },
                        ]
                    }
                />

                <CompanyComponent
                    companyName={"e-Yantra, Indian Institute of Technology Bombay"}
                    workDescription={
                        [
                            {
                                "title": "Sr. Technical Project Researcher",
                                "duration": "June 2020 - July 2022",
                                "description": [
                                    "Developed GradeFast, an automated Python-based grading framework that provides immediate feedback and eliminates manual grading.",
                                    "Maintained a Java Spring-based payment gateway handling 10,000+ transactions during peak hours, automating verification processes to reduce errors by 20%.",
                                    "Implemented a conversational FAQ chatbot in the e-Yantra Community App using RASA and Django, leading to a 30% reduction in email inquiries and a 20% increase in user engagement.",
                                    "Co-organized a 15 week Game Development course for 500+ participants for ‘e-Yantra School Competition 2021’. Coordinated with other instructors and moderated interactive learning sessions.",
                                ],
                            },
                            {
                                "title": "Summer Intern",
                                "duration": "April 2020 - June 2020",
                                "description": [
                                    "Test Driven Development for writing test scripts for the TIVA Launchpad, MSP430 microcontroller.",
                                    "Developed a cross-platform CLI app for evaluating and grading assignments of students on the client side while maintaining security and confidentiality of the test scripts.",
                                ],
                            }
                        ]
                    }
                />

                <CompanyComponent
                    companyName={"Virtual Labs, Indian Institute of Technology Bombay"}
                    workDescription={
                        [
                            {
                                "title": "Summer Intern",
                                "duration": "June 2019 - December 2019",
                                "description": [
                                    "Developed frameworks that enhanced the virtual lab experience for physics, chemistry, and biology, facilitating further educational development and research.",
                                    "Developed the ‘VlabsDev’ Development Portal to track development, release and reception of all virtual labs developed across India."
                                ],
                            }
                        ]
                    }
                />
            </Stack>
        </Box>
    )
}