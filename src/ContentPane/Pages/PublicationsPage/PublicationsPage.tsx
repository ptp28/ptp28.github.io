import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link, Stack} from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PublicationDetailsComponent from "./PublicationDetailsComponent.tsx";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import BadgeIcon from '@mui/icons-material/Badge';

export default function PublicationsPage(props) {
    return (
        <Box sx={{...props.sx}}>
            <Stack sx={{mb: 5}} spacing={2}>
                <Typography color="primary" variant="h3">
                    <CollectionsBookmarkIcon sx={{fontSize: 30}}/> PUBLICATIONS
                </Typography>
                <Typography sx={{pl: 1}} color="textSecondary" variant="h5">
                    <BadgeIcon sx={{fontSize: 23, mr: 1}}/>
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        color="textSecondary"
                        href={'https://scholar.google.com/citations?user=lLvR8rkAAAAJ&hl=en'}>
                        Google Scholar Profile
                    </Link>
                </Typography>
            </Stack>


            <Stack direction="column" spacing={5}>
                <PublicationDetailsComponent
                    publicationName={'Towards developing a learning analytics dashboard for a massive online robotics competition'}
                    publicationConference={'IEEE Educon'}
                    publicationYear={'2022'}
                    publicationDescription={'This research discusses a dashboard developed for a robotics competition where team characteristics are considered for clustering teams and developing models to predict participants\' retention and help the competition\'s instructors monitor their progress and intervene if necessary.'}
                    publicationLinks={[
                        {
                            'text': 'Link to IEEE Xplore',
                            'link': 'https://ieeexplore.ieee.org/abstract/document/9766808',
                            'icon': <BookmarkIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <PublicationDetailsComponent
                    publicationName={'SPArK-Bot: An Educational Robotic Platform'}
                    publicationConference={'IEEE Educon'}
                    publicationYear={'2022'}
                    publicationDescription={'This paper reports the development and explains the features of a highly versatile educational robot focused on teaching beginner-friendly programming and robotics.'}
                    publicationLinks={[
                        {
                            'text': 'Link to IEEE Xplore',
                            'link': 'https://ieeexplore.ieee.org/abstract/document/9766694',
                            'icon': <BookmarkIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>

                <PublicationDetailsComponent
                    publicationName={'Auto-Query - A simple natural language to SQL query generator'}
                    publicationConference={'IEEE Educon'}
                    publicationYear={'2022'}
                    publicationDescription={'The study explored ways to develop an application that takes questions in a natural language and converts them into SQL queries using a sequence-to-sequence model for an e-learning platform.'}
                    publicationLinks={[
                        {
                            'text': 'Link to IEEE Xplore',
                            'link': 'https://ieeexplore.ieee.org/abstract/document/9766617',
                            'icon': <BookmarkIcon sx={{mr: 0.5}}/>
                        }
                    ]}/>
            </Stack>
        </Box>
    )
}