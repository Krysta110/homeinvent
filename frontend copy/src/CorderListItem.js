import React from 'react'


    const CorderListItem = (props) => {
        console.log("props in card: ", props)
        let co = props.customerorder

        console.log("inside card: ", co.customer)

        return (
          <tr>
            <td>{co.customer.name}</td>
            <td>${co.total_paid}</td>
            <td>{co.paid_with}</td>
            <td>{co.product.name}</td>


          </tr>
        )
      }

export default CorderListItem