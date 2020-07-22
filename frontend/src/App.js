import React from 'react';
// import paintings from './painting'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar'
import ProductList from './ProductList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import {Link} from 'react-router-dom'
import AddProductForm from './AddProductForm'



class App extends React.Component{

  constructor(){
    super()
    this.state = {
      // testNew: "testnew",
      // test: "test",
      // form: false,
      products: []
    }
  }

  componentDidMount(){
    this.getProducts()
  }


  addProduct = (e) => {
    e.preventDefault()
    // console.log("addproduct: name: ", e.target[0].value)
    let newProduct = {
          name: e.target[0].value,
          sku: e.target[1].value,
          color: e.target[2].value,
          price: e.target[3].value,
          sale_price: e.target[4].value,
          image_url: e.target[5].value,
          onhand_qty: e.target[6].value,
          coming_in_qty: e.target[7].value
    }

    let newArr = [...this.state.products, newProduct]

    this.setState({
      products: newArr
    }) 
  }

  // createNewProduct = (newProd) => {

  //   console.log("create new product: ", newProd)
  //   fetch("http://localhost:3000/api/v1/prooducts", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newProd)
  //     })
  //     .then(res => res.json())
  //     .then(newProd => {
  //       this.setState({
  //         products: [...this.state.products, newProd],
  //       })
  //     })
  // }

  getProducts = () => {
      fetch("http://localhost:3000/api/v1/products",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        } 
      })
      .then(res => res.json())

      .then(data => {
        this.setState({
          products: data
        })
      })   
      console.log(this.state.products)
   
  }

  render(){

    return (
   
      <BrowserRouter>
    <div>
        <NavBar />
        {/* <button onClick={this.getProducts}>Show Inventory</button> */}
        <Switch>

        {/* <Route path="/login" component={Login} /> */}
        <Route path="/login" component={(routerProps)=><Login {...routerProps} />} />

        <Route path="/signup" component={SignUp} />

        {/* <Route path="/paintings/new" render = {(routeProps) =><PaintingForm {...routeProps} add={this.addPainting} /> } /> */}

        <Route path="/products" render={() => <ProductList products={this.state.products} />}/>
      
        <Route path="/addproductform" render = {(routeProps) =><AddProductForm {...routeProps} add={this.addProduct} />} />

         {/* <Route path="/addproductform" render={() => <AddProductForm products={this.state.products} onSubmit={this.props.createNewProduct}/>}/> */}
        {/* if (localStorage.token !== 'undefined') {
            // <ProductList products={this.state.products}  />
    
           <Dashboard />

            // <Route path='/products' render={routerProps => <ProductList {...routerProps} products={this.state.products}/>} />
           */}
           if(localStorage.token !== 'undefined') {
            <Dashboard products={this.state.products}  />
          }
         }
        </Switch>
        

    </div>
    </BrowserRouter>
  )};
}

export default App;
