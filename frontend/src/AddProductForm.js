import React from 'react'
import {Link} from 'react-router-dom'


class AddProductForm extends React.Component{

    // state = {
    //     name: '',
    //     sku: '',
    //     color: '',
    //     price: 0,
    //     sale_price: 0,
    //     image_url: '',
    //     onhand_qty: 0,
    //     coming_in_qty: 0
    //   }
    
    //   setField = (e) => {
    //     e.preventDefault()

    //     this.setState({
    //       [e.target.name]: e.target.value
    //     })
    //     console.log("setField: ", e.target.name, e.target.value)
    //   }
    


    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     console.log("state in handle submit", this.state)
    //     this.props.onSubmit(this.state)
    //     this.setState({
    //       name: '',
    //       sku: '',
    //       color: '',
    //       price: 0,
    //       sale_price: 0,
    //       image_url: '',
    //       onhand_qty: 0,
    //       coming_in_qty: 0
    //     })

    //   }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("inside handleChange, state: ", this.state)
    }

    handleAddNewProduct = (e) => {  
        e.preventDefault()
        // console.log("Inside Handleadd method: ", this.state)
        // console.log("Inside Handleadd method, props.product: ", this.props.products)

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
                price: this.state.price,
                sale_price: this.state.sale_price,
                image_url: this.state.image_url,
                onhand_qty: this.state.onhand_qty,
                coming_in_qty: this.state.coming_in_qty
            })
        })
        .then(res => res.json())
        .then(newProd => {
            // console.log("New Prodyct in addNEw method then: ", newProd.user)
            this.props.add(newProd.user)
            // this.setState({
            //     products: [...this.props.products, newProd]
            // })
        })

    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("state in handle submit", this.state)
    //     this.props.add(this.state)
    //   }

    goToInventory = () => {
        this.props.history.push("/products")
    }

    render(){

    return(
        <div>
            {/* {console.log("Addproduct props : ", this.props)}
            {console.log("Addproduct state : ", this.state)} */}

         {localStorage.token
            ? <div>

            <form onSubmit={(e) => {
                this.handleAddNewProduct(e)
                this.goToInventory()
                }}>


                <input type='text' name="name" placeholder='Name' onChange={(e) => this.handleChange(e)}/> {/*  </form>onChange={this.setField}/> */}
                <input type='text' name="sku" placeholder='SKU' onChange={(e) => this.handleChange(e)}/>{/* onChange={this.setField}/>*/}
                <input type='text' name="color" placeholder='Color' onChange={(e) => this.handleChange(e)}/>{/* onChange={this.setField}/>*/}
                <input type='text' name="price" placeholder='Price' onChange={(e) => this.handleChange(e)}/>{/* onChange={this.setField}/>*/}
                <input type='text' name="sale_price" placeholder='Sale Price' onChange={(e) => this.handleChange(e)}/>{/* onChange={this.setField}/>*/}
                <input type='text' name="image_url" placeholder='Image URL' onChange={(e) => this.handleChange(e)} />{/* onChange={this.setField}/>*/}
                <input type='text' name="onhand_qty" placeholder='On Hand Qty' onChange={(e) => this.handleChange(e)}/>{/* onChange={this.setField}/>*/}
                <input type='text' name="coming_in_qty" placeholder='Coming In Qty' onChange={(e) => this.handleChange(e)}/>{/*  onChange={this.setField}/>*/}
                <input type='submit' value='Add Product'/>
                {/* < button type="submit" onClick={(e) => this.handleSubmit()} >
                    Add New Product
                </button> */}
  
                {/* <input type='submit' value='Add New Product' onClick={() => this.handleSubmit()}/> */}
            </form>
            <Link to="/products">
                All Products
            </Link>

            </div>
            : <h4> Please Log In to add a new Product</h4>
        }

        </div>
    )}
}

export default AddProductForm

