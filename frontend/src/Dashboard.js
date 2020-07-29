import React, {Component} from 'react'
// import ProductList from './ProductList'
import {Link} from 'react-router-dom'


class Dashboard extends Component {


  goToLogin = () => {
    this.props.history.push("/login")
}

  render(){
    // console.log("dashboard friendObjs:", this.props.friendObjs)

    let logout = () => {
      localStorage.clear()
      console.log("logged out")
      this.goToLogin()

    }
    

    return(
      <div className = "dashboard">


        {localStorage.token
            ? <div>
                <h3>Welcome To Your Home In-Vent Dashboard</h3>
                
                <h5>My Inventory:</h5>
                <p><Link to="/items" style={{color: "green"}}>View My Inventory</Link></p>
                {/* <p><Link to="/additemform" style={{color: "green"}}>Add A New Item</Link></p> */}

                <h5>Products:</h5>
                <p><Link to="/addproductform" style={{color: "green"}}>Add A New Product</Link></p>
                <p><Link to="/products" style={{color: "green"}}>View All Products</Link></p>

                <h5>Purchase Orders:</h5>
                <p><Link to="/addporderform" style={{color: "green"}}>Add A Purchase Order</Link></p>
                <p><Link to="/porders" style={{color: "green"}}>View All Purchase Orders</Link></p>

                <h5>Customers:</h5>
                <p><Link to="/addcustomerform" style={{color: "green"}}>Add A New Customer</Link></p>
                <p><Link to="/customers" style={{color: "green"}}>View All Customers</Link></p>

                <h5>Customer Orders:</h5>
                <p><Link to="/addcorderform" style={{color: "green"}}>Add A Customer Order</Link></p>
                <p><Link to="/corders" style={{color: "green"}}>View All Customer Orders</Link></p>

                <h5>My Account:</h5>
                <p><Link to="/myprofile" style={{color: "green"}}>My Profile</Link></p>
                <button onClick={logout}>Logout</button>

              </div>

            : <h4> Please Log In to see your Dashboard</h4>
            }
      
      </div>
    )
  }

}

export default Dashboard
