import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useEffect } from "react";
import { Grid, Typography, Button, Container, Card } from "@mui/material";
import "./Details.css"

export default function Details() {

    // iterations for needed functions
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    // send dispatch on page render with useParams reference
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: params })
    }, []);

    // retrieve our store to grab keys for render
    const movie = useSelector(store => store.details[0])


    return (
        <Container>
            <Typography variant="h2">MovieDetails</Typography>
            <br />
            {/* only renders movie once store has been updated */}
            {movie &&
                <Card sx={{ padding: 3 }}>
                    <Grid container spacing={6}>
                        <Grid item xs={3}>
                            <img className="posterDetails" src={movie.poster} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h3">{movie.title}</Typography>
                            <Typography variant="h5">{movie.genre}</Typography>
                            <br />
                            <Typography variant="body1">{movie.description}</Typography>
                        </Grid>
                    </Grid >
                    <br />
                    {/* button to go back to movie list */}
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => history.push("/")}>Back to List</Button>
                </Card>}
        </Container>
    )
}