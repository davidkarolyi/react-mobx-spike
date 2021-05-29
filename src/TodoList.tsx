import { observer } from "mobx-react-lite";
import { useStores } from "./stores";

const TodoList: React.FC = observer(() => {
  const { todosStore } = useStores();

  return (
    <>
      {todosStore.pending
        ? "Loading...."
        : todosStore.todos.map((todo, index) => (
            <div
              style={{ border: "1px solid black" }}
              key={index}
              onClick={() => todosStore.pop(index)}
            >
              {todo}
            </div>
          ))}
    </>
  );
});

export default TodoList;
