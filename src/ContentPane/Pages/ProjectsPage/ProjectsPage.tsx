import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TerminalIcon from '@mui/icons-material/Terminal';
import {Stack} from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ScienceIcon from '@mui/icons-material/Science';
import ProjectDetailsComponent from "./ProjectDetailsComponent.tsx";

export default function ProjectsPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Typography sx={{mb: 5}} color="primary" variant="h3">
                <TerminalIcon sx={{fontSize: 30}}/> PROJECTS
            </Typography>

            <Stack direction="column" spacing={5}>
                <ProjectDetailsComponent
                    projectName={'MarkerGo'}
                    projectTags={'#java #android #gcp #firebase'}
                    projectDescription={'Formulated and designed the user interface for an Android game resembling Pokemon Go, allowing players to explore local places of interest, obtain virtual rewards, and crowdsource data.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'CodeQuest'}
                    projectTags={'#python #js #typescript #html'}
                    projectDescription={'Spearheaded development of CodeQuest, an online platform that provides programming education through gamification with interactive coding challenges and real-time feedback.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'Gradefast'}
                    projectTags={'#python #redis #docker #sql'}
                    projectDescription={'An automated grading framework developed using Python and deployed using Docker containers. Allowed for immediate feedback and removed all manual grading work thus saving instructors time.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'Oncoradiology Second Opinion Portal'}
                    projectTags={'#django #html #css #js #mysql'}
                    projectDescription={'An online platform designed to provide expert opinions in cancer radiology, assisting treating doctors in planning timely and correct treatment as part of delivering high-quality care.'}
                    projectLinks={[
                        {
                            'text': 'oncoradx.com',
                            'link': 'https://oncoradx.com/',
                            'icon': <LinkIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'e-Yantra Learning Analytics Dashboard'}
                    projectTags={'#django #html #css #js #mysql'}
                    projectDescription={'A learning analytics dashboard that analyses student engagement during competitions and courses.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'e-VA: The e-Yantra Virtual Assistant'}
                    projectTags={'#python #rasa #postgresql #django'}
                    projectDescription={'An interactive conversational chatbot for the e-Yantra Community App that responds and delivers information about e-Yantra’s activities.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'SPArK-BOT Platform'}
                    projectTags={'#python #raspberrypi #scratch #js'}
                    projectDescription={'It is a highly versatile educational robot focused on teaching beginner-friendly programming and robotics. At the same time, it is a scalable platform, and experiences programmers can use it to build advanced robotic applications.'}
                    projectLinks={[
                        {
                            'text': 'Demonstration video',
                            'link': 'https://youtu.be/zDt4yl8qHLg',
                            'icon': <YouTubeIcon sx={{mr: 0.5}}/>
                        },
                        {
                            'text': 'Elevator Pitch',
                            'link': 'https://youtu.be/PmfAKlIVun4',
                            'icon': <YouTubeIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'Computer Graphics Virtual Lab'}
                    projectTags={'#html #css #js'}
                    projectDescription={'Developed a Computer Graphics virtual lab, endorsed by IIT-Bombay, and used across India by more than 100,000 students to date.'}
                    projectLinks={[
                        {
                            'text': 'Computer Graphics Virtual Lab',
                            'link': 'https://ptp28.github.io/cg-vlab/',
                            'icon': <ScienceIcon sx={{mr: 0.5}}/>
                        },
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'SPArK Messenger'}
                    projectTags={'#android #java #firebase'}
                    projectDescription={'Did a survey of all the popular messaging platforms available in the market. Studied the survey findings and developed six features not present in any existing apps. Also developed an app to manage Firebase database easily from any phone without using Google’s online portal.'}
                    projectLinks={[]}/>

                <ProjectDetailsComponent
                    projectName={'Javascript Games'}
                    projectTags={'#html #css #js'}
                    projectDescription={'Developed a catalog of simple, retro styled, browser based games, entirely coded in vanilla Javascript.'}
                    projectLinks={[
                        {
                            'text': 'Play Games',
                            'link': 'https://ptp28.github.io/games-js/',
                            'icon': <VideogameAssetIcon sx={{mr: 0.5}}/>
                        },
                        {
                            'text': 'Source Code',
                            'link': 'https://github.com/ptp28/games-js',
                            'icon': <CodeIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <ProjectDetailsComponent
                    projectName={'Loony Tunes'}
                    projectTags={'#django #html #css #js #mysql'}
                    projectDescription={'Developed an application called \'Loony Tunes\' which let\'s you upload, store, and play all of your music from the cloud.'}
                    projectLinks={[
                        {
                            'text': 'Source Code',
                            'link': 'https://github.com/ptp28/loony-tunes',
                            'icon': <CodeIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

            </Stack>
        </Box>
    )
}