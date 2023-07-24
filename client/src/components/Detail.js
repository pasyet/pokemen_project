import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneData } from '../store/action'


export default function Detail() {
    const dispatch = useDispatch()
    const onePok = useSelector(state => state.onePokemon)
    const params = useParams()
    const id = params.id
    useEffect(() => {
        dispatch(fetchOneData(id))
    }, [dispatch, id])
    // console.log(onePok)
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ width: "18rem", margin: "7px" }}>
                        <div className="card-body">
                            {/* <img src={onePok.image} className="card-subtitle mb-2 text-muted" alt='...' width="200px"/> */}
                            <h6 className="card-subtitle mb-2 text-muted">Pokemon Name: {onePok.name}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Pokemon Weight: {onePok.weight}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Pokemon Type: {onePok.type}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Pokemon Description: {onePok.description}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}