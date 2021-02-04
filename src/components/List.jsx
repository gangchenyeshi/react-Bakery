import React from 'react';

class List extends React.Component {
    
    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <ul>
                        {this.props.listItem.map(element => {
                            return (
                                <li>{element.name} - {element.price}</li>
                            )
                        })}
                    </ul>
                    
                </div>
            </div>
        )
    }
}
export default List;