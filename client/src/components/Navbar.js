import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">Pokedex</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">Add</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fire" className="nav-link">Fire</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/water" className="nav-link">Water</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/grass" className="nav-link">Grass</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}