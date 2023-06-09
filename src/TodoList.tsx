import React from 'react'
import Todo, { TodoItem } from './Todo'

export default function TodoList({ todos, toggleTodo }: { todos: TodoItem[], toggleTodo: (id: string) => void }) {
    return (
        <div>
            { todos.map(todo => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        })
            }
        </div>
    )
}