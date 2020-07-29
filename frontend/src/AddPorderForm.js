// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
// import * as ReactDOM from "react-dom";

// import React from 'react'
import {Link} from 'react-router-dom'
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";


class AddPOform extends React.Component{
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("inside handleChange, state: ", this.state)
    }

    handleAddNewPO = (e) => {  
        e.preventDefault()
        // console.log("Inside Handleadd method: state: ", this.state)
        // console.log("Inside Handleadd method, props: ", this.props)

        fetch("http://localhost:3000/api/v1/porders", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                date: this.state.date,
                total_paid: this.state.total_paid,
                company_name: this.state.company_name,
                description: this.state.description,
                order_num: this.state.order_num,
                product_id: this.state.product_id

            })
        })
        .then(res => res.json())
        .then(newPO => {
            // console.log("New Prodyct in addNEw method then: ", newPO)
            this.props.add(newPO)
        })

    }


    // handleAddItem = (e) => {  
    //     e.preventDefault()
    //     console.log("Inside Handleadd ITEM: state: ", this.state)
    //     console.log("Inside Handleadd ITEM, props: ", this.props)

    //     fetch("http://localhost:3000/api/v1/poproduct", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //             'Accept': 'application/json',
    //             Authorization: `Bearer ${localStorage.token}`
    //         },
    //         body: JSON.stringify({
    //             // date: this.state.date,
    //             total_paid: this.state.total_paid,
    //             company_name: this.state.company_name,
    //             description: this.state.description,
    //             order_num: this.state.order_num,
    //             product_id: this.state.product_id

    //         })
    //     })
    //     .then(res => res.json())
    //     .then(newPO => {
    //         console.log("New Prodyct in addNEw method then: ", newPO)
    //         this.props.add(newPO)
    //     })

    // }

    goToAllPOs = () => {
        this.props.history.push("/porders")
    }

        
    
      render () {
        const { products } = this.props;
    
        let productsList = products.length > 0
            && products.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);
    
        return(
            <div>
                {/* {console.log("Addpoform props.products : ", this.props.products)}
                {console.log("Addpoform state : ", this.state)} */}
    
    
             {localStorage.token
                ? <div>
    
                <form onSubmit={(e) => {
                    this.handleAddNewPO(e)
                    this.goToAllPOs()
                    }}>
    
    
                    {/* <p><input type='text' name="date" placeholder='Date' onChange={(e) => this.handleChange(e)}/> </p> */}
                    <p><input type='text' name="total_paid" placeholder='Total Paid' onChange={(e) => this.handleChange(e)}/> </p>
                    <p><input type='text' name="company_name" placeholder='Company Name' onChange={(e) => this.handleChange(e)}/></p>
                    <p><input type='text' name="description" placeholder='Description' onChange={(e) => this.handleChange(e)}/></p>
                    <p><input type='text' name="order_num" placeholder='Order Number' onChange={(e) => this.handleChange(e)}/></p>
                    {/* <p><input type='text' name="product_id" placeholder='Product' onChange={(e) => this.handleChange(e)}/></p> */}
                    {/* <DropDownListComponent id='ddlelement' dataSource={this.props.product_names} placeholder="select a product"/> */}
                    
                      {/* <DropDownListComponent id="ddlelement" dataSource={this.products.name} value={this.products.id} placeholder="Select a product" /> */}
                    
    
                    <form onSubmit={(e) => {
                        this.handleAddItem(e)
                    }}>
                        {/* <p><input type='text' name="item" placeholder='Product' onChange={(e) => this.handleChange(e)}/>
                        <input type='text' name="qty" placeholder='Quantity' onChange={(e) => this.handleChange(e)}/> */}

                        <select name="product_id" onChange={(e) => this.handleChange(e)}>
                             {productsList}
                         </select>




                        {/* <p><input type='submit' value='Add Product'/></p> */}
                    
                        </form>
    
    
    
                    <p><input type='submit' value='Add Purchase Order'/></p>
    
                </form>
    
                
                
                <p><Link to="/porders">View All Purchase Orders</Link></p>
                
                </div>
                : <h4> Please Log In to add a new Purchase Order</h4>
            }
    
            </div>
        )}
    }
    
    export default AddPOform
    
    