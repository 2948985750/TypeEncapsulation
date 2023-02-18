type Required_<T> = { [P in keyof T]-?: T[P] };

interface asd {
  a: string;
}
