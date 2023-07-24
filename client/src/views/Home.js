import PokemonsCard from '../components/PokemonCard'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../store/action'

export default function Home() {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    
    return (
        <div>
            <h1>Pokemon list</h1>
            <div className="container-fluid">
                <div className="row">
                    {
                        pokemons.map(pokemon => (
                            <PokemonsCard
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