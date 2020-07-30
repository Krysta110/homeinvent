import React, {Component} from 'react'

class EditCustomerForm extends Component{

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editCustomer = (e) => {   // create request to edit a user
        e.preventDefault()
        let number = this.props.customer.id

        fetch(`http://localhost:3000/api/v1/customers/${number}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                // 'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                username: this.state.username,
                phone: this.state.phone,
                email: this.state.email
                // title: this.state.title,
                // website_url: this.state.website_url,
                // tax_rate: this.state.tax_rate,
                // commission_rate: this.state.commission_rate

            })
        })
        .then(res => res.json())
        .then(user =>  {
            // this.props.editUser(user)
            console.log("edit user in patch request: ", user)
        })
        
    }
   
    goToCustomers= () => {
        this.props.history.push("/customers")
    }

    render(){
        console.log("edit CUSTOMER state: ", this.state)
        console.log("edit CUSTOMER props: ", this.props)
        let cust = this.props.customer
 
        return(
        <div>
            <h3>Update Customer Info</h3>
            <form onSubmit={(e) => {
                this.editCustomer(e)
                // this.goToCustomers()
            }}>

            <tr>
            <td>
            <label>Name ({cust.name})</label>
            </td>
                <td>
                <label>Phone: ({cust.phone})   </label>
                </td>
                <td>
                <label>Email: ({cust.email})     </label>
                </td>
                </tr>

            <tr>
                <td>

            <input name="name" type="text" onChange={(e) => this.handleChange(e)}/>
            </td>

  
           
            <td>
            
            <input name="phone" type="text" onChange={(e) => this.handleChange(e)}/>
            </td>

            <td>
            <input name="email" type="text" onChange={(e) => this.handleChange(e)}/>
            </td>

            <td>
            <input type="Submit" />
            </td>
            </tr>
            </form>
        </div>
        )
    }
}

export default EditCustomerForm


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