import React, { Component } from 'react';
import HeaderView from './headerView.js'
import MainView from './mainView.js'
import FooterView from './footerView.js'

class TodoView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoArr: [],
            isChecked: false,
            IsFooter: false
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.changeTodoState = this.changeTodoState.bind(this);
        this.chearDone = this.chearDone.bind(this);
    }

    addTodo(newTodolist) {
        this.setState(prevState => ({
            todoArr: prevState.todoArr.concat(newTodolist)
        }))
    }

    deleteTodo(itemIndex) {
        this.state.todoArr.splice(itemIndex, 1);
        this.setState({
            todoArr: this.state.todoArr
        })
    }

    allChecked() {
        let isChecked = false;
        if (this.state.todoArr.every(todo => todo.isDone)) {
            isChecked = true;
        }
        this.setState({
            todoArr: this.state.todoArr,
            isChecked
        })
    }

    changeTodoState(index, isDone, isChecked = false) {
        if (isChecked) {
            this.setState({
                todoArr: this.state.todoArr.map(todo => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isChecked: isDone
            })
        } else {
            this.state.todoArr[index].isDone = isDone;
            this.setState({
                todoArr: this.state.todoArr
            })
            this.allChecked();
        }
    }

    chearDone() {
        let todos = this.state.todoArr.filter(todo => !todo.isDone);
        this.setState({
            todoArr: todos,
            isChecked: false
        })
    }

    render() {
        const props = {
            todoCount: this.state.todoArr.length,
            todoDoneCount: this.state.todoArr.filter(todo => todo.isDone).length,
            isChecked: this.state.isChecked
        }

        return (
            <div className="main">
                <HeaderView addTodo={this.addTodo} />
                <MainView changeTodoState={this.changeTodoState} deleteTodo={this.deleteTodo} todos={this.state.todoArr} />
                <FooterView isChecked={this.state.isChecked} clearDone={this.chearDone} {...props} changeTodoState={this.changeTodoState} />
            </div>
        )
    }
}

export default TodoView;