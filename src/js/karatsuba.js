// На входе два n-разрядных положительных целых числа, n является степенью двойки

import {getFirstPart, getLastPart, getLength} from "./additinalFunc";

export function karatsuba(x, y) {
    const len = getLength(x)
    if (len === 1) return x * y

    let a = getFirstPart(x)
    let b = getLastPart(x)

    let c = getFirstPart(y)
    let d = getLastPart(y)

    const p = a + b
    const q = c + d
    const ac = karatsuba(a, c)
    const bd = karatsuba(b, d)
    const pq = karatsuba(p, q)
    const adbc = pq - ac - bd
    return Math.pow(10, len) * ac + Math.pow(10, len / 2) * adbc + bd
}

console.log(karatsuba(5636, 8905));