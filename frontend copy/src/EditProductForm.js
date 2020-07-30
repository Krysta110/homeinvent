import React, {Component} from 'react'


class EditProductForm extends Component{

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    editProduct= (e) => {   // create request to edit a product
        e.preventDefault()
        let number = this.props.product.id
        console.log("number: ", number)

        fetch(`http://localhost:3000/api/v1/products/${number}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                // 'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                onhand_qty: this.state.onhand_qty
                // name: this.state.name
                // title: this.state.title,
                // website_url: this.state.website_url,
                // tax_rate: this.state.tax_rate,
                // commission_rate: this.state.commission_rate

            })
        })
        .then(res => res.json())
        .then(item =>  {
            // this.props.updateProduct(item)
            console.log("edit product in patch request: ", item)
        })
        
    }

    goToAllProducts = () => {
        this.props.history.push("/products")
    }

    render(){
        console.log("edit profile state: ", this.state)
        console.log("edit profile props product id: ", this.props.product.id)


    return(
    <form onSubmit={(e) => {
        this.editProduct(e)
        this.goToAllProducts()
    }}>

    {/* <p><input type='text' name="name" placeholder='Name' onChange={(e) => this.handleChange(e)}/> </p>
    <p><input type='text' name="sku" placeholder='SKU' onChange={(e) => this.handleChange(e)}/></p>
    <p><input type='text' name="color" placeholder='Color' onChange={(e) => this.handleChange(e)}/></p>
    <p><input type='text' name="price" placeholder='Price' onChange={(e) => this.handleChange(e)}/></p> */}

    <input type='text' name="onhand_qty" placeholder="Quantity On Hand" onChange={(e) => this.handleChange(e)} />

    <p><input type='submit' value="Submit"/></p>

     </form>

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