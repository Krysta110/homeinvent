import React from 'react'

// class ProductCard extends Component{

//     render(){
//         // console.log("ProductCard Props: ", this.props.product)
//         let item = this.props.product
//         return(<div>
//             <h5>{item.name}</h5>
//             <p>sku: {item.sku} </p>
//             <p>color: {item.color}</p>
//             <p>price:</p>
            
//             {/* <p><img src={item.image_url} width="100" height="100" alt="product" /></p> */}

//             <p></p>
 

//             </div>)
//     }
    const ProductCard = (props) => {
        // console.log("props in card: ", props)
        let item = props.product
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.sku}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>{item.onhand_qty}</td>
            <td>{item.coming_in_qty}</td>

          </tr>
        )
      }

export default ProductCard