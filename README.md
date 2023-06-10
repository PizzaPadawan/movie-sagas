# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## TODO

### Base

- Bring user to a /details page for the movie onClick of the poster
- Details page
    - [x] Use Sagas / Reducers to show all genres, title description, and image
        - Backend
            - [x] Code comments
            - [x] git commit
            - [x] movie.router.js => router.get('/:id')
            - [x] SQL JOIN query to get all movie genres
        - Redux
            - [x] _root.saga.js
                - [x] Code comments
                - [x] git commit
                - [x] 'FETCH_DETAILS' with payload in req.params
            - [x] _root.reducer.js
                - [x] Code comments
                - [x] git commit
                    - [x] 'SET_DETAILS'
        - Frontend
            - [x] Code comments
            - [x] git commit
            - [x] react-router-dom
            - [x] Details.jsx
    - [x] Back To List button history.pushes user back to home page
        - [x] Code comments
        - [x] git commit

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

- Add Movie page
    - Form
        - [] input for title
        - [] input for poster url
        - [] textfield for description
        - [] 3 dropdowns for genres
    - [] Cancel button to go back to home page
    - [] Save button to submit new movie / push to home page
- Refresh on Details page
    - [] useParams
- Edit page in Details page
    - [] input field to change movie title
    - [] textarea to change description
        - [] STRETCH: display current values in input / textfield
    - [] STRETCH: add / remove genre
    - [] cancel button to push back to Details page
    - [] save button to update database and push back to Details page
- Only show top 10 movies, and add a search bar to the home page
