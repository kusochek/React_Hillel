import React from "react";
import { 
    Grid,
    Typography,
    Button,
    CardMedia,
    CardContent,
    CardActions,
    Card,
} from "@mui/material";

export default function UserItem({ user, id, handleButtonClick }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={user.avatar}
                title={user.fullName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.bio}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleButtonClick}>Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
