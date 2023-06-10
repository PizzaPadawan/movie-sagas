import { HashRouter as Router, Route } from 'react-router-dom';
// import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Typography variant="h1" align="center" >
          <TheatersIcon fontSize='large' color="secondary" /> the movies saga <TheatersIcon fontSize='large' color="secondary"/>
        </Typography>
        <Router>
          <Route path="/" exact>
            <MovieList />
          </Route>
          {/* Details page with params variable included */}
          <Route path='/details/:id'>
            <Details />
          </Route>
          {/* Add Movie page */}
        </Router>
      </div>
    </ThemeProvider>
  );
}


export default App;
