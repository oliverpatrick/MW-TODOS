import React, { useState } from "react";
import { ITodoItem } from "../TodoWidget";
import Input from "../../../../components/form/Input";
import Button from "../../../../components/ui/Button/Button";

interface IEditFormProps {
  todo: ITodoItem;
  editTodo: (edit: string, todo: string) => void;
}

export const EditTodoForm = ({ editTodo, todo }: IEditFormProps) => {
  const [value, setValue] = useState(todo.text);

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    console.log(value);
    e.preventDefault();

    editTodo(value, todo.id);
  };
  return (
    <div className="border border-b-0 py-1 w-full">
      <p className="text-blue-500 text-center">*Editor*</p>
      <form onSubmit={handleSubmit} className="w-full flex justify-betwen">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full"
          placeholder="Update task"
          maxWidth
        />
        <Button type="submit">Confirm</Button>
      </form>
    </div>
  );
};
