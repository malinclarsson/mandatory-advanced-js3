import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    return ( //kom ihåg att du måste returna innehållet, så att komponenten vet vad den ska exportera
    	<div className="App-body-TodoList"> This is TodoList: 

            <input type="text" placeholder="Add a new item"/>
            <button>Add item</button>

            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
};

export default TodoList;