import Type from '../components/Type'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByType } from '../store/action'

export default function Fire() {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(fetchByType('fire'))
    }, [dispatch])
    return (
        <div>
            <h1>Pokemon list</h1>
            <div className="container-fluid">
                <div className="row">
                    {
                        pokemons.map(pokemon => (
                            <Type
                                pokemon={pokemon}
                                key={pokemon.id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}