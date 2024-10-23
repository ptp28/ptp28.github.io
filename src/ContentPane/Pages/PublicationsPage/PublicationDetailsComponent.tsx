import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import {Link, Stack} from "@mui/material";
import * as React from "react";

export default function PublicationDetailsComponent({
                                                        publicationName,
                                                        publicationConference,
                                                        publicationYear,
                                                        publicationDescription,
                                                        publicationLinks
                                                    }) {

    return (
        <Stack direction="column" spacing={1}>
            <Grid container spacing={0} justifyContent={'space-between'}>
                <Grid size={{xs: 12, md: 6}} order={1}>
                    <Typography color="textPrimary" variant="h3">
                        {publicationName}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 'auto'}} order={{xs: 3, md: 2}}>
                    <Typography color="primary" variant="h6" sx={{fontFamily: 'Mulish'}} gutterBottom>
                        {publicationConference}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12}} order={{xs: 2, md: 3}}>
                    <Typography color="textSecondary" variant="h4">
                        {publicationYear}
                    </Typography>
                </Grid>
            </Grid>

            <Typography sx={{mt: 2}}>
                {publicationDescription}
            </Typography>

            <Stack direction="row" spacing={3}>
                {
                    publicationLinks.map((link) => {
                        return (
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                href={link['link']}
                                sx={{fontWeight: 600, display: 'flex', alignItems: 'center'}}>
                                {link['icon']} {link['text']}
                            </Link>
                        )
                    })
                }
            </Stack>

        </Stack>
    );
}