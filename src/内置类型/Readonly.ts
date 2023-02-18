type Readonly_<T> = { readonly [key in keyof T]: T[key] };
// 它的作用是把所有属性都变成只读的

interface asd {
    a: number,
    n: string
}

const obj:Readonly_<asd> = {
    a: 1,
    n: ''
}

obj.a = 2
obj.n = ''