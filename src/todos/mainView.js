import React, { Component } from 'react';
import ItemView from './itemView'

class MainView extends Component {
    render() {
        return (
            <ul className="itemView">
                {this.props.todos.map((item, index) => (
                    <ItemView key={index} {...item} index={index} {...this.props} />
                ))}
            </ul>
        )
    }
}

export default MainView;