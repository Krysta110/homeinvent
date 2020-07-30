import React, {Component} from 'react'

class EditProfileForm extends Component{

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editProfile = (e) => {   // create request to edit a user
        e.preventDefault()

        fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                // 'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                username: this.state.username,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                company_name: this.state.company_name
                // title: this.state.title,
                // website_url: this.state.website_url,
                // tax_rate: this.state.tax_rate,
                // commission_rate: this.state.commission_rate

            })
        })
        .then(res => res.json())
        .then(user =>  {
            this.props.editUser(user)
            // console.log("edit user in patch request: ", user)
        })
        
    }
   
    goToMyProfile = () => {
        this.props.history.push("/myprofile")
    }

    render(){
        // console.log("edit profile state: ", this.state)
        // console.log("edit profile props: ", this.props)


        return(
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={(e) => {
                this.editProfile(e)
                this.goToMyProfile()
            }}>

             <p>   
            <label>UserName </label>
            <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
            </p>

            {/* <p>
            <label>Password </label>
            <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
            </p> */}

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

            {/* <p>
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

            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default EditProfileForm


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