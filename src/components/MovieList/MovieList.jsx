// hook imports
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// MUI
import {
    Grid,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Tooltip,
    Container
} from '@mui/material';
// css
import './MovieList.css'

function MovieList() {

    // instantiating hooks
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <Container>
            {/* Container with flex properties to render header and Add Movie button on same line */}
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography variant="h2">MovieList</Typography>
                <Button
                    sx={{ m: 1 }}
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={() => history.push('/add')}>Add Movie</Button>
            </Container>
            <br />
            {/* Grid property to render movies in an even grid */}
            <Grid container sx={{ justifyContent: 'center' }} spacing={3}>
                {movies.map(movie => {
                    return (
                        <Grid item xs={3} key={movie.id} >
                            <Card>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <h4>{movie.title}</h4>
                                    {/* added className to img for uniformity,
                                        CardActionArea animates on hover and displays Tooltip 
                                        to indicate ability to click for more details */}
                                    <Tooltip title="Click for more details">
                                        <CardActionArea>
                                            <img
                                                className="moviePoster"
                                                src={movie.poster}
                                                alt={movie.title}
                                                onClick={() => history.push(`/details/${movie.id}`)} />
                                        </CardActionArea>
                                    </Tooltip>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>

    );
}

export default MovieList;