import React, {Component} from 'react'

class MyProfile extends Component{

    // handleChange = (e) => {
    //     // debugger
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // signUp = (e) => {   // create request to create a new user
    //     e.preventDefault()

    //     fetch("http://localhost:3000/api/v1/users", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             username: this.state.username,
    //             password: this.state.password,
    //             first_name: this.state.first_name,
    //             last_name: this.state.last_name,
    //             company_name: this.state.company_name,
    //             title: this.state.title,
    //             website_url: this.state.website_url,
    //             tax_rate: this.state.tax_rate,
    //             // commission_rate: this.state.commission_rate

    //         })
    //     })
    //     .then(res => res.json())
    //     .then(console.log)

    // }
   
    // goToLogin = () => {
    //     this.props.history.push("/login")
    // }

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
            <p>Company Name: </p>
            <p>Title: </p>
            <p>Tax Rate: </p>
            <p>Website: </p>
            <p>Address:
                {user.address_street}
                {user.address_city}, {user.address_state} {user.address_zip}
            </p>

             {/* <p>   
            <label>UserName </label>
            
            </p>

            <p>
            <label>First Name   </label>
            <input name="first_name" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <label>Last Name    </label>
            <input name="last_name" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <label>Company Name </label>
            <input name="company_name" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <label>Title    </label>
            <input name="title" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <label>Website URL  </label>
            <input name="website_url" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <label>Tax Rate </label>
            <input name="tax_rate" type="text" onChange={(e) => this.handleChange(e)}/>
            </p> */}

            {/* <label>Commisson Rate</label>
            <input name="commission_rate" type="text" onChange={(e) => this.handleChange(e)}/> */}

            {/* <label>Address</label>
            <input name="company_name" type="text" onChange={(e) => this.handleChange(e)}/> */}

        </div>
        )
    }
}

export default MyProfile


// t.string "username"
// t.string "password_digest"
// t.string "first_name"
// t.string "last_name"
// t.string "company_name"
// t.string "title"
// t.float "tax_rate"
// t.string "website_url"
// t.string "logo"
// t.integer "commission_rate"
// t.string "address_street"
// t.string "address_city"
// t.string "address_state"
// t.string "address_zip"