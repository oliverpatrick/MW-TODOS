// I don't think this would be the best approach - need more thought towards maybe an is dirty state
export async function toggleCompleteApi(id: string, completed: boolean) {
  const todoToUpdate = { completed };
  const response = await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoToUpdate),
  });
  const data = await response.json();
  return data;
}

export async function editTodoApi(id: string, text: string) {
  const todoToUpdate = { text };
  const response = await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoToUpdate),
  });
  const data = await response.json();
  return data;
}
