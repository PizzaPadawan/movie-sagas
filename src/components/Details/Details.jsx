import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Grid, Typography, Button, Container, Card, TextField } from "@mui/material";
import "./Details.css"

export default function Details() {

    // iterations for needed functions
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    // local state
    const [editMode, setEditMode] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")

    // send dispatch on page render with useParams reference
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: params })
    }, []);

    // retrieve our store to grab keys for render
    const movie = useSelector(store => store.details[0])

    const saveChanges = () => {
        dispatch({
            type: 'EDIT_MOVIE',
            payload: {
                id: movie.id,
                update: {
                    title: newTitle,
                    description: newDesc
                }
            }
        });
        setEditMode(false);
    }

    const toggleEdit = () => {
        editMode ? setEditMode(false) : setEditMode(true);
    }

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
                            {/* conditionally rendering Title or TextField based on editMode */}
                            {editMode
                                ? <TextField
                                    sx={{ width: 225 }}
                                    label="New Title"
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)} />
                                : <Typography variant="h3">{movie.title}</Typography>}
                            <Typography variant="h5">{movie.genre}</Typography>
                            <br />
                            {/* conditionally rendering Description or TextField based on editMode */}
                            {editMode
                                ? <TextField
                                    sx={{ width: 575, marginTop: 2 }}
                                    label="New Description"
                                    multiline
                                    rows={5}
                                    value={newDesc}
                                    onChange={(e) => setNewDesc(e.target.value)} />
                                : <Typography variant="body1">{movie.description}</Typography>}
                            <br />
                            {/* conditionally rendering buttons based on editMode */}
                            {editMode
                                ? <>
                                    <Button
                                        sx={{marginTop:2}}
                                        variant="contained"
                                        color="secondary"
                                        onClick={saveChanges}>Save</Button>
                                    <Button
                                        sx={{marginTop:2, marginLeft: 1}}
                                        variant="outlined"
                                        color="secondary"
                                        onClick={toggleEdit}
                                    >Cancel
                                    </Button>
                                </>
                                : <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={toggleEdit}>Edit Movie</Button>}
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