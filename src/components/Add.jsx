import React from 'react';

const min = 1;
const max = 10;
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
    upDateProductName(e) {
        this.setState ({
            productName : this.state.productName
        })
    }
    upDatePrice(event) {
        this.setState({
            price : event.target.value
        })
    }
    
    render () {
        return (
            <div>
                <input type="text" 
                       placeholder="items"
                       onChange={this.upDateProductName}></input>
                <input type="button" 
                       value="Add"></input>
                <br></br>
                <p>{this.state.price} €</p>
                <input type="range" 
                       value={this.state.price} 
                       min={min} max={max} 
                       onChange={this.upDatePrice}
                       onInput={this.upDatePrice}></input>
            </div>
        )
    }
}
export default Add;