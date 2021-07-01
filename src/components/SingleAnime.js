import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { Grid, Typography, Paper} from "@material-ui/core";
import "./SingleAnime.scss";
const SingleAnime = (props) => {
    const { title, image_url, episodes, rating, airing, broadcast, score, url } = props.info;

    useEffect(() => {

    }, [props.info])
    return (
        <Grid container spacing={10} direction="row" justify="center" alignItems="center" alignContent="center" className="singleAnime__container">
            <Grid item>
                <img src={image_url} alt={image_url} className="singleAnime__image" />
            </Grid>
            <Grid item>
                <Paper elevation={3} className="singleAnime__description">
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Airing: {String(airing)}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Score: {score}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Broadcast: {broadcast}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Rating: {rating}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Episodes: {episodes}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <a href={url}>My Anime List</a>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SingleAnime;