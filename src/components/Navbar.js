import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
        <div className='continer'>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} d-flex justify-content-evenly`}>
            <div className="container-fluid">
                <Link className="navbar-brand " to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className='nav-link' to="/smalltextgenerator">{props.sbTitle1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1.5" to="/morsecode">{props.sbTitle2}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1.5" to="/binary">{props.sbTitle3}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1.5" to="/alternating">{props.sbTitle4}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-1.5" to="/freenotepad">{props.sbTitle5}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}


Navbar.defaultProps = {
    title: "Enter Title Of Page",
    sbTitle1: "Update",
    sbTitle2: "Update",
    sbTitle3: "Update",
    sbTitle4: "Update",
    sbTitle5: "Update",
}