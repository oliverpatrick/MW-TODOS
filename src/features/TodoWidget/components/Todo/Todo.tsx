import { ITodoItem } from "../TodoWidget";

interface ITodoProps {
  todo: ITodoItem;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

/**
 *
 * @param todo returns the to todo object
 * @param deleteTodo deletes todo
 * @param editTodo edits todo
 * @param toggleComplete toggles todo status
 * @returns
 */
const Todo = ({ todo, deleteTodo, editTodo, toggleComplete }: ITodoProps) => {
  return (
    <div className="w-full flex justify-between border border-b-0 p-1">
      <p
        className={`flex-1 ${todo.completed ? "line-through" : ""}`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </p>
      <div className="flex flex-row space-x-1">
        <svg
          aria-label="tick"
          aria-hidden="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={todo.completed ? "green" : "red"}
          className="w-6 h-6"
          onClick={() => toggleComplete(todo.id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <svg
          // Add aria labels for A11y compliance
          aria-label="pencil-square"
          aria-hidden="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="blue"
          className="w-6 h-6"
          onClick={() => editTodo(todo.id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        <svg
          aria-label="remove-todo"
          aria-hidden="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="w-6 h-6"
          onClick={() => deleteTodo(todo.id)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default Todo;
