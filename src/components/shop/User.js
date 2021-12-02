import React from 'react'
import { Fragment } from 'react'

const User = (data) => {
    return (
        <Fragment>
    <div className="col-md-6 my-3">
                        
                        <div className="card">
                        <img src= { data.user.image } alt="" />
                            <div className="card-body">
                                <h6>Name:{ data.user.name } </h6>
                                <p>Age: { data.user.age } </p>
                                <p>Skill: { data.user.skill } </p>
                                <p>Gender: { data.user.gender } </p>
                                <p>location: { data.user.location } </p>
                            </div>
                        </div>
                    </div>
         
            
        </Fragment>
    )
}

export default User
