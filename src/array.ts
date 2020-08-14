export { };

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];

let string: Array<string> = ["a", "b", "c"]

let string2: string[] = ["a", "b", "c"]

let nizigenhairetu: number[][] = [
    [200, 43],
    [33, 22]
]
let nizigenhairetu2: Array<number[]> = [
    [200, 43],
    [33, 22]
]
//ユニオンタイプス
let hairetu: (string | number | boolean)[] = [1, "kko", true];