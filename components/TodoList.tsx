import { Todo } from "@/types/todo";
import { SubmitEvent, useState } from "react";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;

    if (title.trim() === "") {
      return;
    }

    const newTodo: Todo = {
      completed: false,
      id: Date.now().toString(),
      title,
    };

    setTodos([...todos.sort((a, b) => b.id.localeCompare(a.id)), newTodo]);

    e.currentTarget.reset();
  };

  const updateTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <section className={styles["todo"]}>
      <p>Use this handy todo list to keep track of your tasks.</p>

      <form className={styles["todo-form"]} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          name="title"
        />
        <button type="submit">Add</button>
      </form>

      {todos.length > 0 && <h2 className={styles["todo-title"]}>{todos.length} Todos</h2>}

      <ul className={styles["todo-list"]}>
        {todos.length > 0 ? todos.map((todo) => (
          <li key={todo.id} className={styles["todo-item"]}>
            <label htmlFor={todo.id}>{todo.title}</label>
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() => updateTodo(todo.id)}
            />
          </li>
        )) : <li className={styles["todo-empty"]}>No todos available, you can add some using the form above.</li>}
      </ul>
    </section>
  );
}