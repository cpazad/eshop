import React, { useState, useEffect} from 'react'
import Product from './Product'
import Sidebar from './Sidebar'
import User from './User'

const Shop = () => {


    const [product, setproducts] = useState([])
    const [user, setusers] = useState([])

    useEffect(() => {
        
        fetch('http://localhost:8000/products')
        .then(data =>data.json())
        .then(data => setproducts(data))

    }, [])

    useEffect(() => {
        
        fetch('http://localhost:8000/users')
        .then(data =>data.json())
        .then(data => setusers(data))

    }, [])

    



    return (
        <>
            <div className="container">
                <div className="row">

                    {/* Sidebar Section */}
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>


                    {/* Main Section */}

                    <div className="col-md-9">

                        {/* Product Section Start here */}

                        <h3 className="hline display-4">Product</h3>
                            <div className="container">
                                <div className="row">
                                        {
                                            product.map(( data ) => <Product item = { data } ></Product>)
                                        }
                                </div>
                            </div> 
                       {/* Product Section finish here */}     

                       {/* Users Section Start here */}

                       <h3 className="hline display-4">Ours Users</h3>
                            <div className="container">
                                <div className="row">
                                        {
                                            user.map(( data ) => <User user = { data } ></User>)
                                        }
                                </div>
                            </div> 
                       {/* User Section finish here */}   


                    </div>
                    
                </div>
            </div>        
          
        </>
    )
}

export default Shop
