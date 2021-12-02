import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
          
            <div className="sidebar">
                <div className="search-container">
                    <form action="/action_page.php" className="form-inline">
                        <input type="text" placeholder="Search.." name="search"/>
                        {/* <button type="submit"><i className="fa fa-search"></i></button> */}
                    </form>
                </div>
                <a href="#home"><i className="fa fa-fw fa-home"></i> Home</a>
                <a href="#services"><i className="fa fa-fw fa-wrench"></i> Services</a>
                <a href="#clients"><i className="fa fa-fw fa-user"></i> Clients</a>
                <a href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            </div>
          
        </>
    )
}

export default Sidebar
