import {
    TextField,
    Button,
    MenuItem,
    Container,
    Typography,
    Card,
} from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function AddMovie() {
    // local state to build newMovie object
    const [selectedGenre, setSelectedGenre] = useState('')
    const [selectedTitle, setSelectedTitle] = useState('')
    const [selectedPoster, setSelectedPoster] = useState('')
    const [selectedDescription, setSelectedDescription] = useState('')

    // instantiate hooks
    const dispatch = useDispatch();
    const history = useHistory();

    const postMovie = () => {
        const newMovie = {
            title: selectedTitle,
            poster: selectedPoster,
            description: selectedDescription,
            genre_id: selectedGenre,
        }

        if (!selectedTitle || !selectedPoster || !selectedDescription || !selectedGenre) {
            alert("Please fill out all fields")
            return
        }

        dispatch({ type: "ADD_MOVIE", payload: newMovie })
        history.push("/")
    }

    const handleChange = (e) => {
        setSelectedGenre(e)
        console.log(selectedGenre)
    }

    return (
        <Container>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined"
                    sx={{ m: 2 }}
                    color="secondary"
                    size="large"
                    onClick={() => history.push("/")}>Cancel</Button>
                <Typography variant="h2" sx={{ m: 1 }} >AddMovie</Typography>
            </Container>
            <Card sx={{ paddingTop: 3, paddingBottom: 3, paddingLeft: 30 }}>
                <TextField
                    sx={{ width: 225 }}
                    label="Title"
                    value={selectedTitle}
                    onChange={e => setSelectedTitle(e.target.value)}
                />
                <TextField
                    sx={{ width: 225 }}
                    label="Poster URL"
                    value={selectedPoster}
                    onChange={e => setSelectedPoster(e.target.value)} />
                <TextField
                    sx={{ width: 225 }}
                    label="Genre"
                    select
                    value={selectedGenre}
                    onChange={e => handleChange(e.target.value)}>
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Disaster</MenuItem>
                    <MenuItem value={6}>Drama</MenuItem>
                    <MenuItem value={7}>Epic</MenuItem>
                    <MenuItem value={8}>Fantasy</MenuItem>
                    <MenuItem value={9}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={11}>Science Fiction</MenuItem>
                    <MenuItem value={12}>Space Opera</MenuItem>
                    <MenuItem value={13}>Superhero</MenuItem>
                </TextField>
                <br />
                <TextField
                    sx={{ width: 675, marginTop: 2 }}
                    rows={3}
                    label="Description"
                    multiline
                    value={selectedDescription}
                    onChange={e => setSelectedDescription(e.target.value)} />
                <br />
                <Button
                    sx={{ marginTop: 2, marginLeft: 71.5 }}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={postMovie}>Submit</Button>
            </Card>
        </Container>
    )
}