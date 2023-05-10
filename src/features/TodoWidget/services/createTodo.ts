import { v4 as uuidv4 } from "uuid";

export async function createTodo(todo: string) {
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
  return data;
}
