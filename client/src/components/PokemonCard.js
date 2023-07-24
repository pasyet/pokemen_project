import { useDispatch } from 'react-redux'
import { destroyPokemon } from '../store/action'
import { useNavigate } from 'react-router-dom';

export default function PokemonCard (props) {
  const {pokemon} = props
  const dispatch = useDispatch()
  const navigate = useNavigate();


  function removePokemon () {
    dispatch(destroyPokemon(pokemon.id))
  }
  function getId () {
    navigate(`/detail/${pokemon.id}`)
  }
  return (
    <div className="col">
      <div className="card" style={{width: "18rem", margin: "7px"}}>
          <div className="card-body">
            {/* <img src={pokemon.image} className="card-subtitle mb-2 text-muted" alt='...' width="200px" /> */}
            <h6 className="card-subtitle mb-2 text-muted">Pokemon Name: {pokemon.name}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Pokemon Type: {pokemon.type}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Pokemon Description: {pokemon.description}</h6>

          </div>
            <button
              className="btn btn-outline-primary"
              onClick={getId}
            >See Detail</button>
            <button
              className="btn btn-danger"
              onClick={removePokemon}
            >Delete</button>
      </div>
    </div>
  )
}