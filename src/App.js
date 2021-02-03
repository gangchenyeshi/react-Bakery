import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Styles/style.css'
// import Add from './components/Add';
// import Lis from './components/List';
// import Pay from './components/Pay';
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
  } 
  selectAdd() {
    this.setState({
      activeTabs : 'add'
    })
  }
  selectList(e) {
    this.setState({
      activeTabs : "list"
    })
  }
  selectPay(e) {
    this.setState({
      activeTabs : "pay"
    })
  }
  render() {
    return (
      <div>
        <Button onClick = {this.selectAdd} isSelected = {this.state.activeTabs === "add" ? true : false}>Add </Button>
        <Button onClick = {this.selectList} isSelected = {this.state.activeTabs === "list" ? true : false}>List </Button>
        <Button onClick = {this.selectPay} isSelected = {this.state.activeTabs === "pay" ? true : false}>Pay</Button>
      </div>
    );
  }
}

export default App;