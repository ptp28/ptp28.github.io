import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import {Stack} from "@mui/material";
import * as React from "react";

export default function CompanyComponent({
                                             companyName,
                                             workDescription
                                         }) {

    return (
        <>
            <Stack direction="column" spacing={1}>
                <Typography color="textPrimary" variant="h3">
                    {companyName}
                </Typography>
                {
                    workDescription.map((work) => {
                        return (<>
                                <Grid container spacing={0} justifyContent={'space-between'}>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Typography sx={{ml: 2}} color="textSecondary" variant="h4">
                                            {work['title']}
                                        </Typography>
                                    </Grid>
                                    <Grid size={{xs: 12, md: 'auto'}}>
                                        <Typography color="primary" fontFamily={'Mulish'} variant="h6" sx={{ml: 2}}
                                                    gutterBottom>
                                            {work['duration']}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography sx={{mr: 4}}>
                                    <ul>
                                        {work['description'].map((description) => {
                                            return (
                                                <li>
                                                    {description}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </Typography>
                            </>
                        )
                    })
                }
            </Stack>
        </>
    );
}