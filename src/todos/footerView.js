import React, { Component } from 'react';

class FooterView extends Component {
    constructor(props) {
        super(props);
        this.handleAllState = this.handleAllState.bind(this);
        this.handleEmptyClick = this.handleEmptyClick.bind(this);
    }

    handleAllState(event) {
        this.props.changeTodoState(null, event.target.checked, true);
    }

    handleEmptyClick() {
        this.props.clearDone();
    }

    render() {
        return (
            <ShowFooter handleAllState={this.handleAllState} handleEmptyClick={this.handleEmptyClick} arr={this.props} />
        )
    }
}

function ShowFooter(props) {
    if (props.arr.todoCount > 0) {
        return (
            <div className="item">
                <input type="checkbox" checked={props.arr.isChecked} onChange={props.handleAllState} />
                <span>{props.arr.todoDoneCount} / {props.arr.todoCount}</span>
                <button onClick={props.handleEmptyClick}>清除选中</button>
            </div>
        )
    } else {
        return ''
    }
}

export default FooterView;