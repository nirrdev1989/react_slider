import { Position } from "./slider.actions.types"

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

export function slideCurrentPage(pos: Position, slideTo: string) {
    // pos: {
    //     start: (state.pos.start + 3) % state.gallery.length,
    //     end: (state.pos.end) % state.gallery.length + 3
    // }

    // if(slideTo === 'next') {

    // }
}