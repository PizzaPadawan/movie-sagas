# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## TODO

### Base

- Bring user to a /details page for the movie onClick of the poster
    - [] onClick sends 'FETCH_DETAILS' dispatch with movie.id and history.pushes user to /details/:id
- Details page
    - [] Code comments
    - [] git commit
    - [] Use Sagas / Reducers to show all genres, title description, and image
        - Backend
            - [] details.router.js with router.get('/:id')
            - [] SQL JOIN query to get all movie genres
        - Redux
            - [] _root.saga.js
                - [] 'FETCH_DETAILS' with payload in req.params
            - [] _root.reducer.js
                - [] 'SET_DETAILS'
        - Frontend
            - [] react-router-dom
            - [] Details.jsx
    - [] Back To List button history.pushes user back to home page

- STYLE IT UP. 
    - [] MUI dark theme
    - Home page
        - [] Grid
        - [] Cards
        - [] STRETCH: Cards animate / change on hover
    - Details page
        - [] Movie poster left justified
        - [] Typography on details

### STRETCH