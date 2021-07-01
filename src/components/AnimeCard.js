import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GridList } from "@material-ui/core";
import { SearchContext } from "../context/search";
import { Typography, Link, Paper, GridListTile, Grid } from "@material-ui/core";
import { typography } from "@material-ui/system";
import "./AnimeCard.scss";

const AnimeCard = (props) => {
    const history = useHistory();
    const search = useContext(SearchContext);
    const title = props.anime.title.length >= 20 ? `${props.anime.title.substring(0, 15)}...` : props.anime.title;
    const imageUrl = props.anime.image_url;
    const synopsis = props.anime.synopsis.length > 30 ? `${props.anime.synopsis.substring(0, 15)}...` : props.anime.synopsis;

    const onClickHandler = () => {
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
            .then((response) => response.json())
            .then((data) => {
                search.setSingle(data);
                localStorage.setItem('singleData', JSON.stringify(data))
                history.push('./single-view');
            })
            .catch(err => console.log(err));
    }
    return (
        <GridListTile className="animeCard__container">
            <Grid container item xs={12}>
                <Paper className="animeCard__paper">
                    <img src={imageUrl} alt={imageUrl} style={{ maxHeight: 300 }} />
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="h2" paragraph={true}>
                        {synopsis}
                    </Typography>
                    <Link component="button" variant="body1" style={{ marginBottom: 0 }} onClick={onClickHandler}>
                        Learn More
                    </Link>
                </Paper>
            </Grid>
        </GridListTile>
    )
}

export default AnimeCard;