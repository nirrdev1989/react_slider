export function slideOneActionUtil(array: any[], slideTo: string) {
    let last = array[array.length - 1]
    let first = array[0]

    let newArray = []

    if (slideTo === 'next') {
        array.shift()
        newArray = [...array, first]
    } else {
        array.pop()
        newArray = [last, ...array]
    }

    return newArray
}


export function swapActionUtil(array: any[], indexOne: number, indexTwo: number) {
    let newArray = [...array]

    let temp = newArray[indexOne]
    newArray[indexOne] = newArray[indexTwo]
    newArray[indexTwo] = temp

    return newArray
}