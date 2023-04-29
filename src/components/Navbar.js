import React from 'react'

export default function Navbar(props) {
  return (
    <>
        <div className='continer'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-evenly">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.sbTitle1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.sbTitle2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.sbTitle3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.sbTitle4}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.sbTitle5}</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
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