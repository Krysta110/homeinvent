import React from 'react'
import {Link} from 'react-router-dom'


class AddCustomerForm extends React.Component{

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("inside handleChange, state: ", this.state)
    }

    handleAddNewCustomer = (e) => {  
        e.preventDefault()
        console.log("Inside Handleadd method: ", this.state)
        console.log("Inside Handleadd method, props.customer: ", this.props)

        fetch("http://localhost:3000/api/v1/customers", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                user_id: localStorage.user_id
            })
        })
        .then(res => res.json())
        .then(newCust => {
            console.log("New customer in HandleNew method then: ", newCust)
            this.props.add(newCust.customer)
        })
    }

    goToCustomers = () => {
        this.props.history.push("/customers")
    }

    render(){

    return(
        <div>
            {console.log("Addcustomer props : ", this.props)}
            {console.log("Addcustomer state : ", this.state)}

         {localStorage.token
            ? <div>

            <form onSubmit={(e) => {
                this.handleAddNewCustomer(e)
                this.goToCustomers()
                }}>


                <p><input type='text' name="name" placeholder='Name' onChange={(e) => this.handleChange(e)}/> </p>
                <p><input type='text' name="email" placeholder='Email' onChange={(e) => this.handleChange(e)}/></p>
                <p><input type='text' name="phone" placeholder='Phone' onChange={(e) => this.handleChange(e)}/></p>
                <p><input type='submit' value='Add New Customer'/></p>
            </form>
            
            <p><Link to="/customers">My Customer List</Link></p>

            </div>
            : <h4> Please Log In to add a new customer</h4>
        }

        </div>
    )}
}

export default AddCustomerForm

