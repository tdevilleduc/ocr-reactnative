const initialState = { seenMoviesFilm: [] }

function toggleSeenMovies(state = initialState, action) {
    let nextState
    switch(action.type) {
        case 'TOGGLE_SEEN':
            const seenMoviesFilmIndex = state.seenMoviesFilm.findIndex(item => item.id === action.value.id)
            if (seenMoviesFilmIndex !== -1) {
                nextState = {
                    ...state,
                    seenMoviesFilm: state.seenMoviesFilm.filter((item, index) => index !== seenMoviesFilmIndex)
                }
            } else {
                nextState = {
                    ...state,
                    seenMoviesFilm: [...state.seenMoviesFilm, action.value]
                }
            }
            return nextState || state
        default: 
            return state
    }
}

export default toggleSeenMovies