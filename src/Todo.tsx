import React from 'react';

export type TodoItem = {
  id: string;
  text: string;
  complete: boolean;
};

export default function Todo({ todo, toggleTodo }: { todo: TodoItem, toggleTodo: (id: string) => void }) {
    return (
        <div>
            <label>{todo.text}</label>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo.id)} />
        </div>
    )
}