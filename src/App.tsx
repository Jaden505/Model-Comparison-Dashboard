import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { TodoItem } from './Todo'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const TodoTextRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTodos && storedTodos !== '[]') setTodos(JSON.parse(storedTodos));
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])

    function handleAddTodo() {
      const text = TodoTextRef.current?.value;
      if (!text) return;
      setTodos(prevTodos => [...prevTodos, { id: uuidv4(), text: text, complete: false }]);
      TodoTextRef.current.value = '';
    }

    function toggleTodo(id: string): void {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        if (!todo) return;
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function clearTodos() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodos(newTodos);
    }

  return (
      <>
          <h1>Todo List</h1>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <input type="text" ref={TodoTextRef}></input>
          <button onClick={handleAddTodo}>add todo</button>
          <button onClick={clearTodos}>clear completed todo's</button>
          <div>{todos.filter(todo => !todo.complete).length} left to do</div>
      </>
  )
}

export default App;
