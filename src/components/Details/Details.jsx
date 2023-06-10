import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { useEffect } from "react";

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
        <>
            <div>
                {/* button to go back to movie list */}
                <button onClick={() => history.push("/")} >Back to List</button>
            </div>
            {/* only renders movie once store has been updated */}
            { movie &&
            <div>
                <h2>{movie.title}</h2>
                <h3>genre: {movie.genre}</h3>
                <img src={movie.poster} />
                <p>{movie.description}</p>
            </div>}
        </>
    )
}