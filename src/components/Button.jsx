import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isSelected : '',
            onClick : '',
            children: ''
        }
    }
    render () {
        // const {addClick, listClick, payClick} = this.props;
        return(
            <button type="button" 
                    className={this.props.isSelected === true ? "btn btn-primary" : "btn btn-light"}>
                    {this.props.children}</button>
            
        )
    }
}

export default Button;