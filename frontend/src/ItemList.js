import React from "react"
import ItemListItem from "./ItemListItem"



const ItemList = (props) => {
    console.log("props in item list ", props)
    return (
        <div>
          {localStorage.token
            ? <div>
        {/* <p><Link to="/addproductform" style={{color: "green"}}>Add A New Product</Link></p> */}

        <h2 className="ui center aligned header"> All Inventory</h2>
        <table className="ui celled striped padded table">
          <tbody>
            <tr>

              <th>
                <h4 className="ui center aligned header">Name</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">SKU</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Color</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Price</h4>
              </th>

              <th>
                <h4 className="ui center aligned header">Sale Price</h4>
              </th>

              <th>
              <h4 className="ui center aligned header">On Hand</h4>
              </th>

              <th>
              <h4 className="ui center aligned header">Coming In</h4>
              </th>

            </tr>
                 {props.items.map(item => {
                 return (<ItemListItem item={item} key={item.id}/>)
                }) }

    

          </tbody>
        </table>
        

        </div>
        : <h4> Please Log In to see your Inventory</h4>
         }
        
</div>
);
};
  
    

export default ItemList
