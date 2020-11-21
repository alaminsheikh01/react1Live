import React from 'react'
import { NavLink } from 'react-router-dom';

const Common =(props) =>{
  return (<> 
  <section id="header" className="d-flex align-items-center">
  <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 justify-content-center d-flex flex-column">
                        <h1>
                            Grow your business with <strong className="brand-name">Company name here</strong>
                        </h1>
                        <h2 className="my-3">
                            {props.name}
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started">
                                {props.btnName}
                            </NavLink>
                        </div>
                    </div>

                        <div className="col-md-6 header-img">
                            <img 
                            src={props.imgsrc}
                            className="img-fluid animated"
                            alt="Common-img"
                            />
                        </div>
                        </div>
                </div>
            </div>
        </div>
  </section>
  </>)
}

export default Common;