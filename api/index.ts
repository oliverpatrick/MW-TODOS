/* eslint-disable prefer-const */
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface AddTodoRequest {
  text: string;
}

interface UpdateTodoRequest {
  text?: string;
  completed?: boolean;
}

// This is the entry point for our API. You can split your
// handlers into multiple files if you'd like, but this isn't
// essential for a small application like this.

const server = express();
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// This functions a simple in-memory database for our todos.
// We can use this to store our todos in memory while we're
// developing our application. In production, we'd obviously
// use a real database to manage our data. Because this is
// just in-memory, our todos will be reset every time we
// restart our server, so don't get too attached to them :)
let todos: Todo[] = [
  {
    id: "31693794-a53b-41b8-bb39-965b94e37db5",
    text: "Create some todos...",
    completed: false,
    createdAt: "2023-04-27T16:58:40.657Z",
  },
  {
    id: "c161a494-f5f4-4c58-b55c-314ba3d80987",
    text: "Create more todos...",
    completed: false,
    createdAt: "2023-05-27T16:58:40.657Z",
  },
];

// Create some routes here...
// Get all todos
server.get("/todos", (req: Request, res: Response) => {
  res.send(todos);
});

// Add a new todo
server.post(
  "/todos",
  (req: Request<Record<string, unknown>, AddTodoRequest>, res: Response) => {
    const { text } = req.body;
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    todos.push(newTodo);
    res.send(newTodo);
  }
);

// Update a todo by id
server.put(
  "/todos/:id",
  (
    req: Request<{ id: string }, Record<string, unknown>, UpdateTodoRequest>,
    res: Response
  ) => {
    const { id } = req.params;
    const { text, completed } = req.body;

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
      return res.status(404).send({ message: "Todo not found" });
    }

    const updatedTodo: Todo = {
      ...todos[todoIndex],
      text: text !== undefined ? text : todos[todoIndex].text,
      completed:
        completed !== undefined ? completed : todos[todoIndex].completed,
    };

    todos[todoIndex] = updatedTodo;
    res.send(updatedTodo);
  }
);

// Delete a todo by id
server.delete("/todos/:id", (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).send({ message: "Todo not found" });
  }

  const deletedTodo = todos[todoIndex];
  todos.splice(todoIndex, 1);
  res.send(deletedTodo);
});

server.listen(8080, () => {
  console.log("Server listening at http://localhost:8080");
});
