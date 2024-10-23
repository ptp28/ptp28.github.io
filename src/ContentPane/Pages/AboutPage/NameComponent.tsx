import {Link, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function NameComponent() {

    return (
        <>
            <Stack direction={{xs: 'column', sm: 'row'}} spacing={{xs: 0, sm: 1}}>
                <Typography
                    color="textPrimary" variant="h1" component="span">
                    PARTH
                </Typography>
                <Typography color="primary" variant="h1" component="span">
                    PARIKH
                </Typography>
            </Stack>
            <Typography color="textSecondary" variant="h4">
                <Link color="textSecondary" sx={{textDecoration: 'none'}}
                      href={'mailto:parthparikh28@outlook.com'}>parthparikh28@outlook.com</Link>
            </Typography>
        </>
    );
}