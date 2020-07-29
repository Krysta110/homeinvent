import React from 'react';
// import paintings from './painting'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar'
import ProductList from './ProductList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
// import {Link} from 'react-router-dom'
import AddProductForm from './AddProductForm'
import AddPorderForm from './AddPorderForm'
import PorderList from './PorderList'
import AddCustomerForm from './AddCustomerForm'
import CustomerList from './CustomerList'
import ItemList from './ItemList'
import "./App.css";
import MyProfile from './MyProfile'
import EditProfileForm from './EditProfileForm'
import CorderList from './CorderList'
import AddCorderForm from './AddCorderForm'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      products: [],
      porders: [],
      customers: [],
      items: [],
      current_user: " ",
      corders: []
    }
  }

  componentDidMount(){
    this.getProducts()
    this.getPorders()
    this.getCustomers()
    this.getItems()
    this.getUser()
    this.getCorders()
  }

  goToProducts = () => {
    this.state.history.push("/products")
  }

  goToAllporders = () => {
  this.props.history.push("/purchaseorders")
  }

  goToCustomers = () => {
    this.props.history.push("/customers")
    }

  addNewProduct = (newProd) => {  
        this.setState({
            products: [...this.state.products, newProd]
        })
    // this.goToProducts()
  }

  addNewPO = (newPO) => {  
    console.log("inside App newPO: ", newPO)
    this.setState({
        porders: [...this.state.porders, newPO]
    })
    // this.goToAllporders()
  }

  addNewCO = (newCO) => {  
    console.log("inside App newCO: ", newCO)
    this.setState({
        corders: [...this.state.corders, newCO]
    })
  }

  addNewCust = (newCust) => {  
    console.log("inside App newCust: ", newCust)
    this.setState({
        customers: [...this.state.customers, newCust]
    })
    // this.goToCustomers()
  }

  getUser = () => {
    fetch("http://localhost:3000/api/v1/users/:id",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      } 
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        current_user: data
      })
    })   
}

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
      // console.log(this.state.products)
  }

  getPorders = () => {
    fetch("http://localhost:3000/api/v1/porders",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      } 
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        porders: data
      })
    })   
    // console.log(this.state.porders)
}

getCorders = () => {
  fetch("http://localhost:3000/api/v1/corders",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    } 
  })
  .then(res => res.json())
  .then(data => {
    this.setState({
      corders: data
    })
  })   
  // console.log(this.state.porders)
}

getCustomers = () => {
  fetch("http://localhost:3000/api/v1/customers",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    } 
  })
  .then(res => res.json())
  .then(data => {
    this.setState({
      customers: data
    })
  })   
  console.log("in app/getcustomers/state.customers: ", this.state.customer)
}

getItems = () => {
  fetch("http://localhost:3000/api/v1/items",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    } 
  })
  .then(res => res.json())
  .then(data => {
    this.setState({
      items: data
    })
  })   
}




  render(){

    return (
      <BrowserRouter>
    <div>
        <NavBar />

        <Switch>

              <Route path="/dashboard" component={Dashboard} />

              <Route path="/login" component={(routerProps)=><Login {...routerProps} />} />
              <Route path="/signup" component={SignUp} />

              <Route path="/products" render={() => <ProductList products={this.state.products} />}/>
              <Route path="/addproductform" component={(routerProps)=><AddProductForm {...routerProps} add={this.addNewProduct} products={this.state.products}/>} />

              <Route path="/items" render={() => <ItemList items={this.state.items} />}/>
              <Route path="/addinventory" component={(routerProps)=><AddProductForm {...routerProps} add={this.addNewProduct} products={this.state.products}/>} />

              <Route path="/porders" render={() => <PorderList porders={this.state.porders} />}/>
              <Route path="/addporderform" component={(routerProps)=><AddPorderForm {...routerProps} products={this.state.products} add={this.addNewPO} porders={this.state.porders}/>} />

              <Route path="/customers" render={() => <CustomerList customers={this.state.customers}/>}/>
              <Route path="/addcustomerform" component={(routerProps)=><AddCustomerForm {...routerProps} add={this.addNewCust}/>} />
              
              <Route path="/myprofile" render={() => <MyProfile user={this.state.current_user}/>}/>
              <Route path="/editprofileform" component={(routerProps)=><EditProfileForm {...routerProps} add={this.editProfile}/>} />
              
              <Route path="/corders" render={() => <CorderList corders={this.state.corders} />}/>
              <Route path="/addcorderform" component={(routerProps)=><AddCorderForm {...routerProps} items={this.state.items} customers={this.state.customers} add={this.addNewCO} corders={this.state.corders}/>} />

            
        </Switch>
        

    </div>
    </BrowserRouter>
  )};
}

export default App;
