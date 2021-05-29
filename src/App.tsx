import { observer } from "mobx-react-lite";
import { useStores } from "./stores";
import TodoList from "./TodoList";

const App: React.FC = observer(() => {
  const { counterStore, todosStore } = useStores();

  return (
    <>
      <div>
        <span>Counter is {counterStore.count}</span>
        <button onClick={() => counterStore.increment()}>Add</button>
      </div>
      <div>Number of characters: {todosStore.characterCount}</div>
      <input
        type="text"
        onKeyDown={(event) => {
          const inputEl = event.target as HTMLInputElement;
          if (event.key === "Enter" && inputEl.value) {
            todosStore.add(inputEl.value);
            inputEl.value = "";
          }
        }}
      />
      <TodoList />
    </>
  );
});

export default App;
