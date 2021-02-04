import React from 'react';


class Add extends React.Component {
    constructor() {
        super();
        this.state= {
            productName : '',
            price : 1,
        }
        this.upDatePrice = this.upDatePrice.bind(this);
        this.upDateProductName = this.upDateProductName.bind(this);
    }
    upDateProductName(event) {
        console.log("before this.setState", this.state.productName)
        this.setState ({
            productName : event.target.value
        })
        console.log("After this.setState", this.state.productName)
    }
    upDatePrice(event) {
        console.log(this.state.price)
        this.setState({
            price : event.target.value
        })
    }
    
    click=()=> {
        console.log('Click Me')
    }
    render () {
        return (
            <div>
                <input type="text" 
                       placeholder="items"
                       onChange={this.upDateProductName}></input>
                <input type="button" 
                       value="Add"
                       onClick={this.click} ></input>
                
                <p>{this.state.price} €</p>
                <input type="range" 
                       min={1} max={10} 
                       value={this.state.price} 
                       onChange={this.upDatePrice}
                       onInput={this.upDatePrice}></input>
            </div>
        )
    }
}
export default Add;