import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){

    // let logout = () => {
    //     localStorage.clear()
    //     console.log("logged out")
    // }
    
    return(
        <div className="ui inverted black menu">
            {/* <a className="item" href={"/"}>
            <h2 className="ui header">
            <i className="paint brush icon" />
            <div className="content">Painting App</div>
            </h2>
            </a> */}

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/dashboard" style={{color: "magenta"}}>Dashboard</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/items" style={{color: "magenta"}}>My Inventory</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/products" style={{color: "magenta"}}> All Products</Link>
                </div>
            </h2>
            </div>



             {/* <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/addpoform" style={{color: "black"}}>Add A PO</Link>
                </div>
            </h2>
            </div> */}
            
            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/signup" style={{color: "magenta"}}>SignUp</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/login" style={{color: "magenta"}}>Login</Link>
                </div>
            </h2>
            </div>

            {/* <div className="item">
            <h2 className="ui header">
                <div className="content">
                   <button onClick={logout}>Logout</button>
                </div>
            </h2>
            </div> */}
            
        </div>
    )
}

export default NavBar