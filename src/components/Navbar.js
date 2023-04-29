import React from 'react'

export default function Navbar(props) {
  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/"></a>
                        </li>
                        <li className="nav-item mx-3 border">
                            <a className="nav-link --bs-dark-border-subtle "  href="/"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">
                        <button type="button" className="btn btn-danger">{props.sbTitle2}</button>

                            </a>
                        </li>
                        <button type="button" className="btn btn-primary">Primary</button>
                        <button type="button" className="btn btn-secondary">Secondary</button>
                        <button type="button" className="btn btn-success">Success</button>
                        <button type="button" className="btn btn-warning">{props.sbTitle3}</button>
                        <button type="button" className="btn btn-info">{props.sbTitle4}</button>
                        <button type="button" className="btn btn-light">{props.sbTitle5}</button>
                        <button type="button" className="btn btn-dark">{props.sbTitle6}</button>

                        <button type="button" className="btn btn-link">Link</button>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}
