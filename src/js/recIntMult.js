// На входе два n-разрядных положительных целых числа, n является степенью двойки

import {getFirstPart, getLastPart, getLength} from "./additinalFunc";

export function recIntMult(x, y) {
    const len = getLength(x);
    if (len === 1) return x * y

    let a = getFirstPart(x)
    let b = getLastPart(x)

    let c = getFirstPart(y)
    let d = getLastPart(y)

    const ac = recIntMult(a, c)
    const ad = recIntMult(a, d)
    const bc = recIntMult(b, c)
    const bd = recIntMult(b, d)

    return Math.pow(10, len) * ac + Math.pow(10, len / 2) * (ad + bc) + bd
}

console.log(recIntMult(34567889, 23456785));