import React from "react"
import CustomerListItem from "./CustomerListItem"
import {Link} from 'react-router-dom'



const CustomerList = (props) => {
    console.log("props in customer list ", props)
    return (
        <div>
          {localStorage.token
            ? <div>
        <p><Link to="/addcustomerform" style={{color: "green"}}>Add A New Customer</Link></p>

        <h2 className="ui center aligned header"> All Customers</h2>
        <table className="ui celled striped padded table">
          <tbody>
            <tr>

              <th>
                <h4 className="ui center aligned header">Name</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Phone</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Email</h4>
              </th>

              {/* <th>
                <h4 className="ui center aligned header">Num of Orders</h4>
              </th> */}

            </tr>
                 {props.customers.map(customer => {
                 return (<CustomerListItem customer={customer} key={customer.id}/>)
                }) }

          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see your Customers</h4>
         }
        
</div>
);
};
  
    

export default CustomerList

