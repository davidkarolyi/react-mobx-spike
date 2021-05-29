import { flow, makeAutoObservable } from "mobx";

export default class TodosStore {
  todos: Array<string> = [];
  pending = false;
  error: Error | null = null;

  get characterCount() {
    return this.todos.reduce((sum, todo) => sum + todo.length, 0);
  }

  constructor() {
    makeAutoObservable(this);
    this.fetch();
  }

  add(title: string) {
    this.todos.push(title);
  }

  pop(index: number) {
    this.todos.splice(index, 1);
  }

  fetch = flow(function* (this: TodosStore) {
    this.pending = true;
    this.todos = [];
    try {
      const response: { todos: Array<string> } = yield mockFetchTodos();
      this.todos = response.todos;
    } catch (error) {
      this.error = error;
    } finally {
      this.pending = false;
    }
  });
}

async function mockFetchTodos() {
  return await new Promise<{ todos: Array<string> }>((res) =>
    setTimeout(
      () =>
        res({
          todos: ["Brush my teeth", "Do some work", "Go to the gym"],
        }),
      1000
    )
  );
}
