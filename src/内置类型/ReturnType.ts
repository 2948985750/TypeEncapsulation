type ReturnType_<T extends Function> = T extends (...args: any[]) => infer R
  ? R
  : any;

//由函数类型Type的返回值类型构建一个新类型。
interface fn {
  fn(): void;
  fn1: () => number;
  fn2(): any[];
}

type retType1 = ReturnType_<fn["fn"]>;
type retType2 = ReturnType_<fn["fn1"]>;
type retType3 = ReturnType_<fn["fn2"]>;
