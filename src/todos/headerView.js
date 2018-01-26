import React, { Component } from 'react';

class HeaderView extends Component {
    constructor(props) {
        super(props);
        this.handleValue = this.handleValue.bind(this);
    }

    handleValue(event) {
        if (event.keyCode === 13) {
            let value = event.target.value;
            if (!value) return;
            let newTodolist = {
                todoText: value,
                isDone: false
            };
            event.target.value = '';
            this.props.addTodo(newTodolist);
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleValue} placeholder="添加新任务" />
            </div>
        )
    }
}

export default HeaderView;