import React, {Component} from 'react'


class EditProductForm extends Component{
    // state = {
    //     current_product: this.props.product
    // }

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editProduct= (e) => {   // create request to edit a product
        e.preventDefault()
        let number = this.props.product.id
        // console.log("number: ", number)


        fetch(`http://localhost:3000/api/v1/products/${number}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                // 'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({

                onhand_qty: this.state.onhand_qty,
                name: this.state.name,
                color: this.state.color,
                sku: this.state.sku,
                price: this.state.price

            })
        })
        .then(res => res.json())
        .then(item =>  {
            // this.props.updateProduct(item)
            console.log("edit product in patch request: ", item)
            this.props.updateProduct(item)
        })
        
    }

    // goToAllProducts = () => {
    //     this.props.history.push("/products")
    // }

    render(){
        // console.log("edit product state: ", this.state)
        // console.log("edit product props product id: ", this.props.product.id)

        let prod = this.props.product

    return(

        <div>
            <h3>Update Product Info</h3>
            <form onSubmit={(e) => {
                this.editProduct(e)
                // this.goToAllProducts()
            }}>

            <tr>
                <td>
                <label>Name ({prod.name})</label>
                </td>

                <td>
                <label>Sku: ({prod.sku})   </label>
                </td>

                <td>
                <label>Color: ({prod.color})     </label>
                </td>

                <td>
                <label>Price: ({prod.price})     </label>
                </td>

                <td>
                <label>On Hand: ({prod.onhand_qty})     </label>
                </td>

                </tr>

            <tr>

                <td>
                <input name="name" type="text" onChange={(e) => this.handleChange(e)}/>
                </td>

                <td>
                <input name="sku" type="text" onChange={(e) => this.handleChange(e)}/>
                </td>

                <td>
                <input name="color" type="text" onChange={(e) => this.handleChange(e)}/>
                </td>

                <td>
                <input name="price" type="text" onChange={(e) => this.handleChange(e)}/>
                </td>

                <td>
                <input name="onhand_qty" type="text" onChange={(e) => this.handleChange(e)}/>
                </td>

            <td>
            <input type="Submit" />
            </td>
            </tr>
            </form>
        </div>
    






        )
    }
}

export default EditProductForm






// import React, {Component} from 'react'


// class EditProductForm extends Component{

//     handleChange = (e) => {
//         // debugger
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     editProduct= (e) => {   // create request to edit a product
//         e.preventDefault()
//         let number = this.props.product.id
//         console.log("number: ", number)

//         fetch(`http://localhost:3000/api/v1/products/${number}`,{
//             method: "PATCH",
//             headers: {
//                 "Content-type": "application/json",
//                 // 'Accept': 'application/json',
//                 Authorization: `Bearer ${localStorage.token}`
//             },
//             body: JSON.stringify({
//                 onhand_qty: this.state.onhand_qty
//                 // name: this.state.name
//                 // title: this.state.title,
//                 // website_url: this.state.website_url,
//                 // tax_rate: this.state.tax_rate,
//                 // commission_rate: this.state.commission_rate

//             })
//         })
//         .then(res => res.json())
//         .then(item =>  {
//             // this.props.updateProduct(item)
//             console.log("edit product in patch request: ", item)
//         })
        
//     }

//     goToAllProducts = () => {
//         this.props.history.push("/products")
//     }

//     render(){
//         console.log("edit profile state: ", this.state)
//         console.log("edit profile props product id: ", this.props.product.id)


//     return(
//     <form onSubmit={(e) => {
//         this.editProduct(e)
//         this.goToAllProducts()
//     }}>

//     {/* <p><input type='text' name="name" placeholder='Name' onChange={(e) => this.handleChange(e)}/> </p>
//     <p><input type='text' name="sku" placeholder='SKU' onChange={(e) => this.handleChange(e)}/></p>
//     <p><input type='text' name="color" placeholder='Color' onChange={(e) => this.handleChange(e)}/></p>
//     <p><input type='text' name="price" placeholder='Price' onChange={(e) => this.handleChange(e)}/></p> */}

//     <input type='text' name="onhand_qty" placeholder="Quantity On Hand" onChange={(e) => this.handleChange(e)} />

//     <p><input type='submit' value="Submit"/></p>

//      </form>

//         )
//     }
// }

// export default EditProductForm