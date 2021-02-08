import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Styles/style.css'
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTabs : "add",
      items :[]
    }
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.add = this.add.bind(this);
  } 
  selectAdd(event) {
    this.setState({
      activeTabs : 'add'
      
    })
  }
  selectList(event) {
    this.setState({
      activeTabs : 'list'
    })
  }
  selectPay(event) {
    this.setState({
      activeTabs : 'pay'
    })
  }

  changeTab(changeTheTab) {
    if(this.state.activeTabs == changeTheTab) {
      return  true
    } else {
      return false
    }
  }
  
  add(name, price) {
    const objectItem = {
      name : name,// property and second name is parameter in addItem
      price: price
    }
    const newList = this.state.items
    newList.push(objectItem)
    this.setState({
      items :newList
    })

  }
  
  renderContent = ()=> {
    switch(this.state.activeTabs) {
      case 'add':
        return <Add addItem={this.add}></Add>
      case 'list':
        return <List listItem={this.state.items}></List>
      case 'Pay':
        return <Pay></Pay>
      default:
        return <Add></Add>
    }
  }
  
    render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-6">
                <Button onClickButton = {this.selectAdd} 
                    isSelected = {this.state.activeTabs === "add" ? true : false}>Add </Button>
                <Button onClickButton =  {this.selectList} 
                    isSelected = {this.state.activeTabs === "list" ? true : false}>List </Button>
                <Button onClickButton =  {this.selectPay} 
                    isSelected = {this.state.activeTabs === "pay" ? true : false}>Pay</Button>

        {this.renderContent()}

            </div>
        </div>
        
        {/* <Button onClickButton = {this.selectAdd} 
                isSelected = {this.changeTab ("add")}>Add </Button>
        <Button onClickButton =  {this.selectList} 
                isSelected = {this.changeTab  ("list")}>List </Button>
        <Button onClickButton =  {this.selectPay} 
                isSelected = {this.changeTab ("pay")}>Pay</Button> */}
        
      </div>
    );
  }
}

export default App;