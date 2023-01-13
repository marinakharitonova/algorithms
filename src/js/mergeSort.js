//на входе массив из n челых чисел

function merge(arrI, arrJ) {
    const resLength = arrI.length + arrJ.length
    let i = 0
    let j = 0
    let res = []
    for (let k = 0; k < resLength; k++) {
        if (i < arrI.length && j < arrJ.length) {
            if (arrI[i] < arrJ[j]) {
                res[k] = arrI[i]
                i++
            } else {
                res[k] = arrJ[j]
                j++
            }
        } else if (i < arrI.length){
            res[k] = arrI[i]
            i++
        } else {
            res[k] = arrJ[j]
            j++
        }
    }

    return res
}

export function mergeSort(arr) {
    if (!arr.length || arr.length === 1) return arr

    let firstPart = arr.slice(0, arr.length / 2)
    firstPart = mergeSort(firstPart)
    let secondPart = arr.slice(arr.length / 2)
    secondPart = mergeSort(secondPart)

    return merge(firstPart, secondPart)
}

console.log(mergeSort([5,4,1,8,7,2,6,3]));

console.log(mergeSort([3,133,7,77,2]));