import { Dispatch, SetStateAction } from "react";
import Button from "../../../../components/ui/Button/Button";

interface ITodoFilterProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

/**
 *
 * @param filter the current filter used
 * @param setFilter used to set the filter
 * @returns
 */
export const TodoFilter: React.FC<ITodoFilterProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-center space-x-1 my-4 w-60">
        <Button selected={filter === "all"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button
          selected={filter === "active"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          selected={filter === "completed"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
