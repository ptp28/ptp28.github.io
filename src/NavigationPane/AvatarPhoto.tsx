import {Avatar} from "@mui/material";

export default function AvatarPhoto({width, height, border}) {
    return (
        <>
            <Avatar
                alt="PARTH PARIKH"
                src={'avatar.jpeg'}
                sx={{
                    m: 2,
                    width: width,
                    height: height,
                    border: border,
                }}
            />
        </>
    );
}