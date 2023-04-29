import React from 'react'

export default function Navbar(props) {
  return (
    <>
        <div className='bg-body-tertiary d-flex justify-content-evenly'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand " href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle1}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle2}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle3}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle4}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle5}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle6}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle7}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle8}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle9}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle10}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle11}</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                            <button type="button" className="btn btn-secondary">{props.sbTitle12}</button></a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" for="flexSwitchCheckDefault">Switch</label>
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
    sbTitle6: "Update",
    sbTitle7: "Update",
    sbTitle8: "Update",
    sbTitle9: "Update",
    sbTitle10: "Update",
    sbTitle11: "Update",
    sbTitle12: "Update",
}