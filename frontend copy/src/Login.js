import React, {Component} from 'react'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import {Redirect} from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom'



class Login extends Component{
    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logIn = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res =>  res.json())
        .then(userInfo => {
            localStorage.token = userInfo.token
            localStorage.user_id = userInfo.user_id
            console.log("localStorage in login method: ", localStorage)
            // console.log("userInfo in login method: ", userInfo)

            // <Redirect push to="/dashboard"/>
            if (localStorage.token !== 'undefined'){
             this.props.history.push('/dashboard')
            }
          
        })
    
    }
   
    render(){
        return(
        <div>
            <h1>Welcome To Home In-Vent</h1>
            <h4> Keep your InVentory organized while at Home!</h4>

            <h2>LogIn</h2>
            <form onSubmit={(e) => this.logIn(e)}>
            
            <p>
            <label>UserName </label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <label>Password </label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <input type="submit"/>
            </p>
            </form>

            <div className="item">
                <div className="content">
                    <p>
                    Don't Have An Account?
                    <Link to="/signup" style={{color: "green"}}> SignUp Here</Link>
                    </p>
                </div>

            </div>



        </div>
        )
    }
}


export default Login

