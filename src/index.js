import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './todos/css/todo.css';
import TodoView from './todos/todoView.js';

ReactDOM.render(
    <TodoView />,
    document.getElementById('root')
);
registerServiceWorker();