import React, { Component } from 'react';

class ItemView extends Component {
    constructor(props) {
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    handleMouseOver() {
        this.refs.deleteBtn.style.display = 'block'
    }

    handleMouseOut() {
        this.refs.deleteBtn.style.display = 'none'
    }

    handleDelete() {
        this.props.deleteTodo(this.props.index)
    }

    render() {
        let doneStyle = this.props.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        return (
            <li className="item"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                <input type="checkbox" onChange={this.handleChange} checked={this.props.isDone} />
                <span style={doneStyle}>{this.props.todoText}</span>
                <button ref="deleteBtn" onClick={this.handleDelete} style={{ 'display': 'none' }}>删除</button>
            </li>
        )
    }
}

export default ItemView;