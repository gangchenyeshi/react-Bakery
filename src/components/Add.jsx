import React from 'react';

class Add extends React.Component {
    constructor() {
        super();
        this.state= {
            productName : '',
            price : 1,
        }
    }
    render () {
        return (
            <div>
                Add 
                <input onChange=></input>
            </div>
        )
    }
}
export default Add;