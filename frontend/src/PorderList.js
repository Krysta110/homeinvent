import React from "react"
import PorderCard from "./PorderCard"
import {Link} from 'react-router-dom'



const PorderList = (props) => {
    console.log("props in purchaseorderlist ", props)
    return (
        <div>
          {localStorage.token
            ? <div>
        <p><Link to="/addporderform" style={{color: "green"}}>Add A New Purchase Order</Link></p>

        <h2 className="ui center aligned header"> My Purchase Orders</h2>
        <table className="ui celled striped padded table">
          <tbody>
            <tr>

              <th>
                <h4 className="ui center aligned header">Date</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Total Paid</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Comany Name</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Description</h4>
              </th>

              <th>
              <h4 className="ui center aligned header">Order Number</h4>
              </th>

              {/* <th>
              <h4 className="ui center aligned header">Product</h4>
              </th> */}

            </tr>
                 {props.porders.map(purchaseorder => {
                 return (<PorderCard purchaseorder={purchaseorder} key={purchaseorder.id} />)
                }) }

    

          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see your Purchase Orders</h4>
         }
        
</div>
);
};
  
    

export default PorderList


