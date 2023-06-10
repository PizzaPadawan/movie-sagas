import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './MovieList.css'
import { Grid, Card, CardActionArea, CardContent, Typography, Container } from '@mui/material';

function MovieList() {

    // iterating functions
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <Container>
            <Typography variant="h2">MovieList</Typography>
            <br/>
            <Grid container sx={{justifyContent: 'center'}} spacing={3}>
                {movies.map(movie => {
                    return (
                        <Grid item xs={3} key={movie.id} >
                            <Card>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <h3>{movie.title}</h3>
                                    <CardActionArea>
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            onClick={() => history.push(`/details/${movie.id}`)} />
                                    </CardActionArea>
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