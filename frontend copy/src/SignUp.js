import React, {Component} from 'react'

class SignUp extends Component{

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {   // create request to create a new user
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                company_name: this.state.company_name,
                title: this.state.title,
                website_url: this.state.website_url,
                tax_rate: this.state.tax_rate,
                // commission_rate: this.state.commission_rate

            })
        })
        .then(res => res.json())
        .then(console.log)

    }
   
    goToLogin = () => {
        this.props.history.push("/login")
    }

    render(){
        return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => {
                this.signUp(e)
                this.goToLogin()
            }}>
             <p>   
            <label>UserName </label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            <p>
            <label>Password </label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
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
            </p>

            {/* <label>Commisson Rate</label>
            <input name="commission_rate" type="text" onChange={(e) => this.handleChange(e)}/> */}

            {/* <label>Address</label>
            <input name="company_name" type="text" onChange={(e) => this.handleChange(e)}/> */}

            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default SignUp


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