import React from 'react'
import {Link} from 'react-router-dom'


class AddProductForm extends React.Component{

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("inside handleChange, state: ", this.state)
    }

    handleAddNewProduct = (e) => {  
        e.preventDefault()
        console.log("Inside Handleadd method state: ", this.state)
        console.log("Inside Handleadd method, props: ", this.props)

        fetch("http://localhost:3000/api/v1/products", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                name: this.state.name,
                sku: this.state.sku,
                color: this.state.color,
                price: this.state.price
                // sale_price: this.state.sale_price,
                // image_url: this.state.image_url,
                // onhand_qty: this.state.onhand_qty,
                // coming_in_qty: this.state.coming_in_qty
            })
        })
        .then(res => res.json())
        .then(newProd => {
            console.log("New Prodyct in addNEw method then: ", newProd.product)
            this.props.add(newProd.product)
            // this.setState({
            //     products: [...this.props.products, newProd]
            // })
        })

    }

    goToAllProducts = () => {
        this.props.history.push("/products")
    }

    render(){

    return(
        <div>
            {console.log("Addproduct props : ", this.props)}
            {console.log("Addproduct state : ", this.state)}

         {localStorage.token
            ? <div>

            <form onSubmit={(e) => {
                this.handleAddNewProduct(e)
                this.goToAllProducts()
                }}>


                <p><input type='text' name="name" placeholder='Name' onChange={(e) => this.handleChange(e)}/> </p>
                <p><input type='text' name="sku" placeholder='SKU' onChange={(e) => this.handleChange(e)}/></p>
                <p><input type='text' name="color" placeholder='Color' onChange={(e) => this.handleChange(e)}/></p>
                <p><input type='text' name="price" placeholder='Price' onChange={(e) => this.handleChange(e)}/></p>
                <p><input type='text' name="image_url" placeholder='Image URL' onChange={(e) => this.handleChange(e)} /></p>

                <p><input type='submit' value='Add Product'/></p>
                
            </form>
            <p><Link to="/products">All Products</Link></p>

            </div>
            : <h4> Please Log In to add a new Product</h4>
        }

        </div>
    )}
}

export default AddProductForm

