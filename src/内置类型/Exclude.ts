type Exclude_<T, K> = T extends K ? never : T;
// 如果Type的值中含有K将会被排除

type Color = "red" | "green" | "blue";

type newColor = Exclude_<Color, "red">;

let str: newColor = "red";
let str1: newColor = "blue";
