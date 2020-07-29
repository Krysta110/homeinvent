import React from 'react'


    const CustomerListItem = (props) => {
        // console.log("props in card: ", props)
        let cust = props.customer
        return (
          <tr>
            <td>{cust.name}</td>
            <td>{cust.phone}</td>
            <td>{cust.email}</td>
            {/* <td>{cust.order_count}</td> */}
     

          </tr>
        )
      }

export default CustomerListItem