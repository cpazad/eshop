import React from 'react';
import { Fragment } from 'react';
import image from './logo.svg';

const Product = (data) => {

  


    return (
        <Fragment>
            
            
                    <div className="col-md-4 my-3">
                        
                        <div className="card">
                        <img src= { data.item.img } alt="" />
                            <div className="card-body">
                                <h6>Brand:{ data.item.name } </h6>
                                <p>Price: { data.item.price } Taka</p>
                            </div>
                        </div>
                    </div>
                
            
        </Fragment>
    )
}

export default Product
