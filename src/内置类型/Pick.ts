export type Pick_<T, K extends keyof T> = { [key in K]: T[key] };
// 从类型T中提取来自K的属性来构造新的类型。

interface asd {
  readonly a: number;
  b: string;
  c: (str: string) => void;
}

const obj: Pick_<asd, "a" | "b"> = {
  a: 1,
  b: "",
};

obj.a = 0;
// 这里可以看到Pick提取出来的属性特性不变，原来是只读或者可选的提取出来就还是只读或者可选的
