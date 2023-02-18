interface ArrayConstructor {
  new (arrayLength?: number): any[];
  new <T>(arrayLength: number): T[];
  new <T>(...items: T[]): T[];
  (arrayLength?: number): any[];
  <T>(arrayLength: number): T[];
  <T>(...items: T[]): T[];
  //这么写是因为Array可以不用new进行调用
  isArray(arg: any): boolean;
  from<T>(arrayLike: ArrayLike<T>): T[];
  from<T, U>(
    arrayLike: ArrayLike<T>,
    processingFn: (val: T, index: number, thisArg: any) => U[]
  );
  of<T>(...args: any[] | T[]): any[] | T[];
  IsFalse: boolean;
  readonly prototype: any[];
}

interface Array<T> {
  length: number;
  toString(): string;
  toLocaleString(): string;
  at(index: number): T;
  push(...args: T[] | any[]): number;
  pop(): T | undefined; //| any;
  shift(): T | undefined;
  unshift(...args: T[]): number;
  splice(start: T, delCount?: T): T[];
  splice(start: T, delCount: T, ...item: T[]): T[];
  slice(start?: number, end?: number): T[];
  concat(): T[];
  concat(...args: T[]): T[];
  copyWithin(target: T): T[];
  copyWithin(target: T, start?: number, end?: number): T[];
  every(cbFn: (val: T) => boolean): boolean;
  every(cbFn: (val: T, index: number) => boolean): boolean;
  every(cbFn: (val: T, index: number, array: T[]) => boolean): boolean;
  fill(value: T);
  fill(value: T, start: number): T[];
  fill(value: T, start: number, end: number): T[];
}

declare var Array: ArrayConstructor;

var arr: number[] = [];
// Array泛型接口的类型T就是在这里传入的
arr.at(0);
arr.push(123);
arr.pop();
arr.shift();
arr.unshift(1, 2, ["asdf"], [123]);
arr.splice(0);
arr.slice();
arr.copyWithin(0);
arr.every(() => {});
arr.fill();
