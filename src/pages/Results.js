import React, { useEffect, useContext, useState } from 'react'
import { SearchContext } from '../context/search';
import AnimeList from '../components/AnimeList';
//Importing material ui
import { Box, Typography } from '@material-ui/core';
const Results = () => {

    const search = useContext(SearchContext);
    const [dataExist, setDataExist] = useState(true);

    useEffect(() => {
        if (search.animeData === undefined || search.animeData.length === 0) {
            try {
                search.setData(JSON.parse(localStorage.getItem('myData')))
                setDataExist(true);
            } catch (error) {
                console.log(error);
                setDataExist(false);
            }
        }
        console.log(search.animeData);
    }, [search])
    return (
        <Box mt={2}>
            {
                (dataExist && <AnimeList data = {search.animeData}/>) || <Typography variant="h4">Data does not exist</Typography>
            }
        </Box>
    )
}

export default Results;