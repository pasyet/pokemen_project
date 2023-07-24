import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    pokemons: [],
    onePokemon: []
}

function reducer(state = initialState, action) {
    const { type, payload } = action
    if (type === 'POKEMON/FETCHPOKEMON') {
        return { ...state, pokemons: payload }
    } else if (type === 'POKEMON/ADDPOKEMON') {
        return { ...state, pokemons: [...state, payload] }
    } else if (type === 'POKEMON/FETCHONEPOKEMON') {
        return { ...state, onePokemon: payload }
    }
    return state
}

const store = createStore(reducer, applyMiddleware(thunk))


export default store