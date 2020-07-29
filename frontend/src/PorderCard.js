import React from 'react'


    const PurchaseOrderCard = (props) => {
        console.log("props in card: ", props)
        let po = props.purchaseorder
        return (
          <tr>
            
            <td>${po.total_paid}</td>
            <td>{po.company_name}</td>
            <td>{po.description}</td>
            <td>{po.order_num}</td>
            <td>{po.product.name}</td>


          </tr>
        )
      }

export default PurchaseOrderCard