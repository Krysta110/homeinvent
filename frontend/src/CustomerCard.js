import React from 'react'


    const CustomerCard = (props) => {
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

export default CustomerCard