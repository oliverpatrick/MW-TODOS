export async function deleteTodoApi(id: string) {
  await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
    method: "DELETE",
  });
}
