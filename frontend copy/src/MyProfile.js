import React, {Component} from 'react'
import {Link} from 'react-router-dom'

 
class MyProfile extends Component{


    render(){
        console.log("In My Profile, state: ", this.state)
        console.log("In My Profile, props: ", this.props.user)
        let user = this.props.user
        return(
        <div>
            <h2>My Profile</h2>

            <p>UserName: {user.username}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Company Name: {user.company_name}</p>

            {/* <button onClick={logout}>Edit Profile</button> */}
            <p><Link to="/editprofileform" style={{color: "green"}}>Edit Profile</Link></p>

            
        </div>
        )
    }
}

export default MyProfile

