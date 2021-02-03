import React from "react";

class Button extends React.Component {
    constructor(){
        super();
        // this.classSelected = this.classSelected.bind(this);
    }
    // classSelected(){
    //     if(this.props.isSelected === true) {
    //         return "btn btn-primary"
    //     }else{
    //         return "btn btn-light"
    //     }
    // }
    render () {
        return(
            <button type="button" 
                    onClick ={this.props.onClickButton}
                    className={this.props.isSelected === true ? "btn btn-primary" : "btn btn-light"}>
                    {this.props.children}</button>
            
            // <button type="button" 
            //         onClick ={this.props.onClickButton}
            //         className={this.classSelected}>
            //         {this.props.children}</button>
            
        )
    }
}

export default Button;