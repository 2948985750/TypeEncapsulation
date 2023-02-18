type Extract_<T, K> = T extends K ? T : never;
//

type Color_ = "red" | "green" | "blue";

type newColor_ = Extract_<Color_, "red">;
let str_: newColor_ = "red";
