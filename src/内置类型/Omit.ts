import type { Pick_ } from "./Pick";
type never_<T, K extends T> = T extends K ? never : T;
// 如果
type Omit_<T, K extends keyof T> = Pick_<T, never_<keyof T, K>>;
// 提取T中不是K的属性然后构造新类型

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit_<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
