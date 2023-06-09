import React from 'react'

export default function Ad1(props) {
  return (
    <>  
        <div className='container my-4' style={{height:"250px"}}>
            <a href="https://teamseas.org/" className=' card rounded float-start'>
                <img style={{height:"250px"}} src={props.ad1} className="rounded" alt="Ad_No_1"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">AD</h5>
                </div>
            </a>
            <a href="https://teamseas.org/" className=' card rounded float-end'>
                <img style={{height:"250px"}} src={props.ad2} className="rounded" alt="Ad_No_2"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">AD</h5>
                </div>
            </a>
        <div className='container my-2' style={{height:"250px"}}>
        </div>
        </div>
    </>
  )
}

Ad1.defaultProps = {
    ad1:"Update AD Image 1",
    ad2:"Update AD Image 2",
}