export function setPokemons(payload) {
    return { type: 'POKEMON/FETCHPOKEMON', payload }
}
export function setOnePokemon(payload) {
    return { type: 'POKEMON/FETCHONEPOKEMON', payload }
}

export function destroyPokemon (id) {
    return async (dispatch) => {
        try {
            const result = await fetch(`http://localhost:3000/pokemon/${id}`, {
                method: 'DELETE'
            })
            dispatch(fetchData())
            const data = await result.json()
        } catch (err) {
            console.log(err);
        }
    }
}

export function fetchData () {
    return async (dispatch) => {
        try {
            const result = await fetch(`http://localhost:3000/pokemon/`)
            const data = await result.json()
            dispatch(setPokemons(data))
        } catch (err) {
            console.log(err);
        }
    }
}

export function fetchByType (type) {
    return async (dispatch) => {
        try {
            const result = await fetch(`http://localhost:3000/pokemon?type=${type}`)
            const data = await result.json()
            dispatch(setPokemons(data))
        } catch (err) {
            console.log(err);
        }
    }
}

export function fetchOneData (id) {
    return async (dispatch) => {
        try {
            const result = await fetch(`http://localhost:3000/pokemon/${id}`)
            const data = await result.json()
            dispatch(setOnePokemon(data))
        } catch (err) {
            console.log(err);
        }
    }
}

export function addPokemon (payload) {
    return async (dispatch) => {
        try {
            const result = await fetch(`http://localhost:3000/pokemon`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: payload.name,
                    description: payload.description,
                    weight: payload.weight,
                    image: payload.image,
                    type: payload.type
                })

            })
            dispatch(fetchData())
        } catch (err) {
            console.log(err);
        }
    }
}