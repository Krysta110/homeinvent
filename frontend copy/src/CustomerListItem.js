import React from 'react'


    const CustomerListItem = (props) => {
        // console.log("props in card: ", props)
        let cust = props.customer
        return (
          <tr onClick={()=>props.handleCustomerID(cust)}>
            <td>{cust.name}</td>
            <td>{cust.phone}</td>
            <td>{cust.email}</td>
            {/* <td>{cust.corders.count}</td> */}
     

          </tr>
        )
      }

export default CustomerListItem