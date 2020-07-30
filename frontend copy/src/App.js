import React from 'react';
// import paintings from './painting'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar'
import ProductList from './ProductList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import AddProductForm from './AddProductForm'
import AddCustomerForm from './AddCustomerForm'
import CustomerList from './CustomerList'
import "./App.css";
import MyProfile from './MyProfile'
import EditProfileForm from './EditProfileForm'
import AddCorderForm from './AddCorderForm'
import CorderList from './CorderList'



class App extends React.Component{

  constructor(){
    super()
    this.state = {
      products: [],
      customers: [],
      corders: [],
      current_user: " "

    }
  }

  componentDidMount(){
    this.getProducts()
    this.getCustomers()
    this.getCorders()
    this.getUser()
  }

  goToProducts = () => {
    this.state.history.push("/products")
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


  addNewCO = (newCO) => {  
    console.log("inside App newCO: ", newCO)
    this.setState({
        corders: [...this.state.corders, newCO]
    })
    // this.goToAllporders()
  }

  addNewCust = (newCust) => {  
    console.log("inside App newCust: ", newCust)
    this.setState({
        customers: [...this.state.customers, newCust]
    })
    // this.goToCustomers()
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

  getUser = () => {
    console.log("localstorage in getUSer: ", localStorage)
    fetch(`http://localhost:3000/api/v1/users/${localStorage.user_id}`,
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
    // console.log(this.state.products)
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
  // console.log("in app/getcustomers/state.customers: ", this.state.customer)
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
}

editUser = (user)=>{
  this.setState({
    current_user: user
  })
}

updateProduct = (item) =>{
  // {this.props.updateProduct}
  console.log("updateProduct in App: ", item)
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

              <Route path="/products" render={() => <ProductList products={this.state.products} updateProduct={this.updateProduct}/>}/>
              <Route path="/addproductform" component={(routerProps)=><AddProductForm {...routerProps} add={this.addNewProduct} products={this.state.products}/>} />

              <Route path="/customers" render={() => <CustomerList customers={this.state.customers}/>}/>
              <Route path="/addcustomerform" component={(routerProps)=><AddCustomerForm {...routerProps} add={this.addNewCust}/>} />
              
              <Route path="/corders" render={() => <CorderList corders={this.state.corders} customers={this.state.customers}/>}/>
              <Route path="/addcorderform" component={(routerProps)=><AddCorderForm {...routerProps} products={this.state.products} customers={this.state.customers} add={this.addNewCO} />} />

              <Route path="/myprofile" render={() => <MyProfile user={this.state.current_user}/>}/>
              <Route path="/editprofileform" component={(routerProps)=><EditProfileForm {...routerProps} user={this.state.current_user} editUser={this.editUser}/>} />
        </Switch>
        

    </div>
    </BrowserRouter>
  )};
}

export default App;
