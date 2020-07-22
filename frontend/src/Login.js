import React, {Component} from 'react'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import {Redirect} from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


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
            console.log("localStorage in login method: ", localStorage)
            // <Redirect push to="/dashboard"/>
            if (localStorage.token !== 'undefined'){
             this.props.history.push('/dashboard')
            }
          
        })
    
    }
   
    render(){
        return(
        <div>
            <h2>LogIn</h2>
            <form onSubmit={(e) => this.logIn(e)}>
            <label>UserName</label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
            <input type="submit"/>
            </form>
        </div>
        )
    }
}


export default Login






// import React, {Component} from 'react'
// import {BrowserRouter, Route, Switch} from 'react-router-dom'


// class Login extends Component{
//     handleChange = (e) => {
//         // debugger
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     logIn = (e) => {
//         e.preventDefault()

//         fetch("http://localhost:3000/api/v1/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: this.state.username,
//                 password: this.state.password
//             })
//         })
//         .then(res =>  res.json())
//         .then(userInfo => {
//             localStorage.token = userInfo.token
//             console.log("localStorage in login method: ", localStorage)
//         })
//     }
   
//     render(){
//         return(
//         <div>
//             <h2>LogIn</h2>
//             <form onSubmit={(e) => this.logIn(e)}>
//             <label>UserName</label>
//             <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
//             <label>Password</label>
//             <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
//             <input type="submit"/>
//             </form>
//         </div>
//         )
//     }
// }


// export default Login


