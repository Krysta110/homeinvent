import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){

    let logout = () => {
        localStorage.clear()
        console.log("logged out")
    }
    
    return(
        <div className="ui inverted green menu">
            {/* <a className="item" href={"/"}>
            <h2 className="ui header">
            <i className="paint brush icon" />
            <div className="content">Painting App</div>
            </h2>
            </a> */}

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/dashboard" style={{color: "black"}}>Dashboard</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/products" style={{color: "black"}}>Inventory</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/addproductform" style={{color: "black"}}>Add A Product</Link>
                </div>
            </h2>
            </div>


            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/signup" style={{color: "black"}}>SignUp</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/login" style={{color: "black"}}>Login</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                   <button onClick={logout}>Logout</button>
                   {/* <Link to="/login" style={{color: "black"}}>LogOut</Link> */}
                </div>
            </h2>
            </div>
            
        </div>
    )
}

export default NavBar