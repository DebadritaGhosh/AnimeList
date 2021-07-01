import React, { useContext,useState } from 'react'
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../context/search';

//Importing material Ui
import { FormControl, Input, IconButton, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
//style
import "./Home.scss";
const Home = () => {
    const search = useContext(SearchContext);
    const history = useHistory();

    const [input, setInput] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        search.search(input)
            .then(data => {
                search.setData(data.results);
                localStorage.setItem("myData",JSON.stringify(data.results));
                history.push("./results");
            }
            )
    }
    return (
        <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
            <Grid item>
                <Grid item>
                    <img alt="hero" src={`${process.env.PUBLIC_URL}/background.png`}
                        height={550} />
                </Grid>
                <Grid item>
                    <form className="home__form">
                        <FormControl type="submit" className="home__formControl">
                            <Input placeholder="Search Anime"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="home__input"
                            />
                            <IconButton variant="contained"
                                color="primary"
                                type="submit"
                                disabled={!input}
                                onClick={handleSearch}
                                className="home__iconButton"
                            >
                                <SearchIcon />
                            </IconButton>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Home;