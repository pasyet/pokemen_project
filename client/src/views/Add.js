import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPokemon } from '../store/action'

export default function Add () {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [weight, setWeight] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')
    const [errMsg, setErrmsg] = useState('')
    const [errMsgPokemon, setErrmsgPokemon] = useState('')

    function changeName(payload) {
        setName(payload)
    }
    function changeDescription(payload) {
        setDescription(payload)
    }
    function changeWeight(payload) {
        setWeight(payload)
    }
    function changeImage(payload) {
        setImage(payload)
    }
    function changeType(payload) {
        setType(payload)
    }
    
    function addPok() {
        if (!name && !description && !weight && !image && !type ){
            setErrmsg('input cannot empty')
        } else if (weight.length < 0) {
            setErrmsgPokemon('input weight cannot zero')
        } else if (name && description && weight && image && type ){
            dispatch(addPokemon({name, description, weight, image, type}))
            navigate.push('/')
        }
    }

    return (
        <div className="container">
            <h2>{errMsg}</h2>
            <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e) => changeName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="textarea" className="form-control" onChange={(e) => changeDescription(e.target.value)}/>
            </div>
            <h2>{errMsgPokemon}</h2>
            <div className="mb-3">
                <label className="form-label">Weight</label>
                <input type="number" className="form-control" onChange={(e) => changeWeight(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="url" className="form-control" onChange={(e) => changeImage(e.target.value)}/>
            </div>
            <div className="mb-3">
            <select className="form-select" onChange={(e) => changeType(e.target.value)}>
                <option value="water">Water</option>
                <option value="fire">Fire</option>
                <option value="grass">Grass</option>
            </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={addPok}>Submit</button>
            </form>
            </div>
    )
}