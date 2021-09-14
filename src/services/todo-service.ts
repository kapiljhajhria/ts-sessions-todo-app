// abstract todo service
import { ITodoItem } from "../App";

abstract class TodoGenericService {
  abstract getTodo(): ITodoItem[];

  abstract saveTodo(todo: ITodoItem): void;

  abstract deleteTodo(id: number): void;

  abstract updateTodo(todo: ITodoItem): void;

  abstract saveTodoList(todoList: ITodoItem[]): void;
}

class CacheTodoService extends TodoGenericService {
  private todoList: ITodoItem[] = [];

  constructor() {
    super();
  }

  getTodo(): ITodoItem[] {
    return this.todoList;
  }

  saveTodo(todo: ITodoItem): void {
    this.todoList.push(todo);
  }

  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }

  updateTodo(todo: ITodoItem): void {
    this.todoList = this.todoList.map((item) =>
      item.id === todo.id ? todo : item
    );
  }

  saveTodoList(todoList: ITodoItem[]): void {
    this.todoList = todoList;
  }
}

class LocalStorageTodoService extends TodoGenericService {
  constructor() {
    super();
  }

  // this returns any, it should be ITodoItem[]
  getTodo(): ITodoItem[] {
    return JSON.parse(localStorage.getItem("todo") || ""); // string or null
  }

  saveTodo(todo: ITodoItem): void {
    const todoList = this.getTodo();
    todoList.push(todo);
    this.saveTodoList(todoList);
  }

  deleteTodo(id: number): void {
    const todoList = this.getTodo();
    this.saveTodoList(todoList.filter((item) => item.id !== id));
  }

  updateTodo(todo: ITodoItem): void {
    const todoList = this.getTodo();
    this.saveTodoList(
      todoList.map((item) => (item.id === todo.id ? todo : item))
    );
  }

  saveTodoList(todoList: ITodoItem[]): void {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }
}

class TodoService extends TodoGenericService {
  cacheService: CacheTodoService;
  localStorageService: LocalStorageTodoService;
  // mongoDbSService1:MongoDbTodoService;
  // mongoDbSService2:MongoDbTodoService;

  services: any;
  constructor(private todoService: TodoGenericService) {
    super();
    this.cacheService = new CacheTodoService();
    this.localStorageService = new LocalStorageTodoService();
    this.services = [this.cacheService, this.localStorageService];
  }

  getTodo(): ITodoItem[] {
    // first check cache, if cache is empty then check local storage
    for (let service of this.services) {
      const todoList = service.getTodo();
      break;
    }
  }
  saveTodo(todo: ITodoItem): void {
    throw new Error("Method not implemented.");
  }
  deleteTodo(id: number): void {
    throw new Error("Method not implemented.");
  }
  updateTodo(todo: ITodoItem): void {
    throw new Error("Method not implemented.");
  }
  saveTodoList(todoList: ITodoItem[]): void {
    throw new Error("Method not implemented.");
  }
}
