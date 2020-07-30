// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
// import * as ReactDOM from "react-dom";

// import React from 'react'
import {Link} from 'react-router-dom'
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";


class AddCorderForm extends React.Component{
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("inside handleChange, state: ", this.state)
    }

    handleAddNewCorder = (e) => {  
        e.preventDefault()

        console.log("Inside Handleadd method: state: ", this.state)
        console.log("Inside Handleadd method, props: ", this.props)

        fetch("http://localhost:3000/api/v1/corders", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                customer_id: this.state.customer_id,
                total_paid: this.state.total_paid,
                paid_with: this.state.paid_with,
                product_id: this.state.product_id

            })
        })
        .then(res => res.json())
        .then(newCO => {
            // console.log("New Prodyct in addNEw method then: ", newPO)
            this.props.add(newCO)
        })

    }


    goToAllCorders = () => {
        this.props.history.push("/corders")
    }

        
    
      render () {
        const { products } = this.props;
        // console.log("items is this.props: ", this.props )
        // console.log("productss is : ", products )

    
        let productsList = products.length > 0
            && products.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);


        const { customers } = this.props;
        // console.log("customers is this.props: ", this.props )
        // console.log("customers is : ", customers )
        let customersList = customers.length > 0
            && customers.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);
    
        console.log("Inside cust order form, props: ", this.props)
    
        return(
            <div>
                {console.log("Addcoform props.items : ", this.props.products)}
                {console.log("Addcoform props.customers : ", this.props.customers)}

                {console.log("Addcoform state : ", this.state)}
    
    
             {localStorage.token
                ? <div>
    
                <form onSubmit={(e) => {
                    this.handleAddNewCorder(e)
                    this.goToAllCorders()
                    }}>
    

                    <p> Customer: 
                    <select name="customer_id" onChange={(e) => this.handleChange(e)}>
                        {customersList}
                    </select>
                    </p>

                    <p>Total Paid: <input type='text' name="total_paid"  onChange={(e) => this.handleChange(e)}/> </p>
                    <p>Paid With: <input type='text' name="paid_with" onChange={(e) => this.handleChange(e)}/></p>
                    
                    <p> Product: 
                    <select name="product_id" onChange={(e) => this.handleChange(e)}>
                        {productsList}
                    </select>
                    </p>
                    
       
                    <p><input type='submit' value='Add Customer Order'/></p>
    
                </form>
    
                
                
                <p><Link to="/corders">View All Customer Orders</Link></p>
                
                </div>
                : <h4> Please Log In to add a new Customer Order</h4>
            }
    
            </div>
        )}
    }
    
    export default AddCorderForm
    
    