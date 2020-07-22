import React, {Component} from 'react'
// import ProductList from './ProductList'

class Dashboard extends Component {

  render(){
    // console.log("dashboard friendObjs:", this.props.friendObjs)
    return(
      <div className = "dashboard">


        {localStorage.token
            ? <h3>Welcome To Your Home In-Vent Dashboard</h3>
            : <h4> Please Log In to see your Dashboard</h4>
            }
      
      </div>
    )
  }

}

export default Dashboard
