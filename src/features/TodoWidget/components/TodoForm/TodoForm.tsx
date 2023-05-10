import { useState } from "react";
import Input from "../../../../components/form/Input";
import Button from "../../../../components/ui/Button/Button";

interface ITodoFormProps {
  addTodo: (todo: string) => void;
}

/**
 *
 * @param addTodo addTodo function
 * @returns
 */
export const TodoForm = ({ addTodo }: ITodoFormProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <div className="flex justify-center my-4 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-row border-b"
      >
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none"
          placeholder="What is the task today?"
        />
        <Button secondary type="submit">
          Add Task
        </Button>
      </form>
    </div>
  );
};
