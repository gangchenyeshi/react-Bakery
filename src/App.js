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
  render() {
    return (
      <div>
        {/* <Button onClick = {this.selectAdd} 
                isSelected = {this.state.activeTabs === "add" ? true : false}>Add </Button>
        <Button onClick =  {this.selectList} 
                isSelected = {this.state.activeTabs === "list" ? true : false}>List </Button>
        <Button onClick =  {this.selectPay} 
                isSelected = {this.state.activeTabs === "pay" ? true : false}>Pay</Button> */}

        <Button onClick = {this.selectAdd} 
                isSelected = {this.changeTab ("add")}>Add </Button>
        <Button onClick =  {this.selectList} 
                isSelected = {this.changeTab  ("list")}>List </Button>
        <Button onClick =  {this.selectPay} 
                isSelected = {this.changeTab ("pay")}>Pay</Button>
        
      </div>
    );
  }
}

export default App;