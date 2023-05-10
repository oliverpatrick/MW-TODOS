import { useEffect, useState } from "react";
import { ITodo } from "../../models/Todo";
import { TodoForm } from "./TodoForm/TodoForm";
import { EditTodoForm } from "./EditTodoForm/EditTodoForm";
import Todo from "./Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import { TodoFilter } from "./TodoFilter/TodoFilter";
import { useFetch } from "../../hooks/useFetch";

export interface ITodoItem extends ITodo {
  isEditing: boolean;
}

export const TodoWidget = () => {
  const [filter, setFilter] = useState<string>("all");
  const { data, loading, error } = useFetch<ITodo[]>(
    `${import.meta.env.VITE_API_URL}/todos`
  );
  const [todos, setTodos] = useState<ITodoItem[] | []>([]);

  useEffect(() => {
    if (data) {
      setTodos(
        data.map((todo) => ({
          ...todo,
          isEditing: false,
        }))
      );
    }
  }, [data]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <h2>
        Oh no something went wrong.
        <p>{error}</p>
      </h2>
    );
  }

  // separate fetch requests into separate promises in a new folder.
  const addTodo = async (todo: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        text: todo,
        completed: false,
        createdAt: new Date().toISOString(),
      }),
    });
    const data = await response.json();
    setTodos([...todos, data]);
  };

  const deleteTodo = async (id: string) => {
    await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = async (id: string) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...todoToUpdate,
            completed: !todoToUpdate.completed,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
      }
    }
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = async (text: string, id: string) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...todoToUpdate,
          text,
        }),
      }
    );
    const data = await response.json();
    setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className="w-3/4 m-5">
      <h1 className="text-center text-3xl font-semibold">Todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      {filteredTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} todo={todo} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
