import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){

    // let logout = () => {
    //     localStorage.clear()
    //     console.log("logged out")
    // }
    
    return(
        <div className="ui inverted black menu">


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
                    <Link to="/products" style={{color: "magenta"}}>My Inventory</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/customers" style={{color: "magenta"}}>Customers</Link>
                </div>
            </h2>
            </div>

            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/corders" style={{color: "magenta"}}>Orders</Link>
                </div>
            </h2>
            </div>
            
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