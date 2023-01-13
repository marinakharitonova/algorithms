export function getLength(number) {
    return number.toString().length;
}

export function getFirstPart(number) {
    const length = getLength(number)
    return Number(number.toString().slice(0, length / 2))
}

export function getLastPart(number) {
    const length = getLength(number)
    return Number(number.toString().slice(length / 2))
}