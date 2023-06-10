import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
export default function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// get req to server side to grab details from router GET req
function* fetchDetails(action) {
    try {
        // declare get as response to refernce for data
        const response = yield axios.get(`/api/movie/${action.payload.id}`);
        // log data
        console.log("returning movie details:", response.data);
        // send data to redux store
        yield put ({ type: 'SET_DETAILS', payload: response.data});
    } catch (error) {
        console.log("error on fetchDetails saga", error);
    }
}