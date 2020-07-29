import React from "react"
import CorderListItem from "./CorderListItem"
import {Link} from 'react-router-dom'



const CorderList = (props) => {
    console.log("props in customer orderlist ", props)
    return (
        <div>
          {localStorage.token
            ? <div>
        <p><Link to="/addcorderform" style={{color: "green"}}>Add A New Customer Order</Link></p>

        <h2 className="ui center aligned header"> Customer Orders</h2>
        <table className="ui celled striped padded table">
          <tbody>
            <tr>

              <th>
                <h4 className="ui center aligned header">Total Paid</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Paid With</h4>
              </th>

              {/* <th>
                <h4 className="ui center aligned header">Description</h4>
              </th>

              <th>
              <h4 className="ui center aligned header">Order Number</h4>
              </th> */}

              <th>
                <h4 className="ui center aligned header">Product</h4>
              </th>

              {/* <th>
              <h4 className="ui center aligned header">Product</h4>
              </th> */}

            </tr>
                 {props.corders.map(customerorder => {
                 return (<CorderListItem customerorder={customerorder} key={customerorder.id}/>)
                }) }

    

          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see Customer Orders</h4>
         }
        
</div>
);
};
  
    

export default CorderList


