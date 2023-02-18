type Partial_<T> = { [key in keyof T]?: T[key] };
// 它的作用是把所有属性变成可选的
interface obj_ {
  a: string;
  b: number;
}

const obj: Partial_<obj_> = {};
// 不报错
