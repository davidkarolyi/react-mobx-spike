import { createContext, useContext } from "react";
import CounterStore from "./CounterStore";
import TodosStore from "./TodosStore";

const storeContext = createContext({
  counterStore: new CounterStore(),
  todosStore: new TodosStore(),
});

export const useStores = () => useContext(storeContext);
