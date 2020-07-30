// import React from "react"
import React, {Component} from 'react'

import CustomerListItem from "./CustomerListItem"
import {Link} from 'react-router-dom'

import EditCustomerForm from './EditCustomerForm'


// const CustomerList = (props) => {
class CustomerList extends Component{ 

  state = {
    showEdit: false,
    customer: " "
  }

  handleChange = (e) => {
    // debugger
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleCustomerID= (cust) => {
  console.log("handleCustomerID: ", cust)
  this.setState({
    showEdit: !this.state.showEdit,
    customer: cust
  })
}

// editCustomer = (e) => {   // create request to edit a customer
//   console.log("editCustomer EEE: ", e)

//   e.preventDefault() 

//   fetch(`http://localhost:3000/api/v1/users/${e.customer_id}`,{
//       method: "PATCH",
//       headers: {
//           "Content-type": "application/json",
//           // 'Accept': 'application/json',
//           Authorization: `Bearer ${localStorage.token}`
//       },
//       body: JSON.stringify({
//           name: this.state.name,
//           first_name: this.state.first_name,
//           last_name: this.state.last_name,
//           company_name: this.state.company_name
//           // title: this.state.title,
//           // website_url: this.state.website_url,
//           // tax_rate: this.state.tax_rate,
//           // commission_rate: this.state.commission_rate

//       })
//   })
//   .then(res => res.json())
//   .then(user =>  {
//       // this.props.editUser(user)
//       console.log("edit user in patch request: ", user)
//   })
  
// }



render(){
    // console.log("props in customer list ", this.props)
    return (
        <div>
          {localStorage.token
            ? <div>
              {this.state.showEdit ? <EditCustomerForm customer={this.state.customer}/>
              : null }



        <p><Link to="/addcustomerform" style={{color: "green"}}>Add A New Customer</Link></p>

        <h2 className="ui left aligned header"> All Customers</h2>
        {/* <table className="ui celled striped padded table"> */}
        <table class="ui selectable celled table">

          <tbody>
            <tr>

              <th>
                <h4 className="ui left aligned header">Name</h4>
              </th>

              <th>
                <h4 className="ui left aligned header">Phone</h4>
              </th>

              <th>
                <h4 className="ui left aligned header">Email</h4>
              </th>

              {/* <th>
                <h4 className="ui left aligned header">Num of Orders</h4>
              </th> */}

            </tr>
                 {this.props.customers.map(customer => {
                 return (<CustomerListItem customer={customer} handleCustomerID={this.handleCustomerID} key={customer.id}/>)
                }) }

          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see your Customers</h4>
         }
        
</div>
);
};
}
    

export default CustomerList








// import React from "react"
// // import React, {Component} from 'react'

// import CustomerListItem from "./CustomerListItem"
// import {Link} from 'react-router-dom'



// const CustomerList = (props) => {
// // class CustomerList extends Component{ 

//     console.log("props in customer list ", props)
//     return (
//         <div>
//           {localStorage.token
//             ? <div>
//         <p><Link to="/addcustomerform" style={{color: "green"}}>Add A New Customer</Link></p>

//         <h2 className="ui left aligned header"> All Customers</h2>
//         {/* <table className="ui celled striped padded table"> */}
//         <table class="ui selectable celled table">

//           <tbody>
//             <tr>

//               <th>
//                 <h4 className="ui left aligned header">Name</h4>
//               </th>

//               <th>
//                 <h4 className="ui left aligned header">Phone</h4>
//               </th>

//               <th>
//                 <h4 className="ui left aligned header">Email</h4>
//               </th>

//               {/* <th>
//                 <h4 className="ui left aligned header">Num of Orders</h4>
//               </th> */}

//             </tr>
//                  {props.customers.map(customer => {
//                  return (<CustomerListItem customer={customer} key={customer.id}/>)
//                 }) }

//           </tbody>
//         </table>
        

//         </div>
//         : <h4> Please Log In to see your Customers</h4>
//          }
        
// </div>
// );
// };
  
    

// export default CustomerList

