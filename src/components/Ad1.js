import React from 'react'

export default function Ad1() {
  return (
    <>  
        <div className='container my-2'>
            <a href="https://teamseas.org/" className=' card rounded float-start'>
                <img style={{height:"250px"}} src="https://global-uploads.webflow.com/5f6cc9cd16d59d990c8fca33/61d30ac833d72078f141fb47_team-seas-raised-30-million-come-back.jpg" className="rounded" alt="Ad_No_1"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">AD</h5>
                </div>
            </a>
            <a href="https://teamseas.org/" className=' card rounded float-end'>
                <img style={{height:"250px"}} src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/01/rsz_191026-theoceancleanup_malaysia-1099294.jpg" className="rounded" alt="Ad_No_1"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">AD</h5>
                </div>
            </a>

        </div>
    </>
  )
}
