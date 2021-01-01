export const SWAP = 'SWAP'
export const SLIDE_BY_ONE = 'SLIDE_BY_ONE'
export const SLIDE_BY_POS_NEXT = 'SLIDE_BY_POS_NEXT'
export const SLIDE_BY_POS_PREV = 'SLIDE_BY_POS_PREV'


export interface Swap {
    indexOne: number
    indexTwo: number
}

export interface Position {
    start: number
    end: number
}

export interface SwapActionType {
    type: typeof SWAP,
    payload: Swap
}

export interface SlideByOneActionType {
    type: typeof SLIDE_BY_ONE
    payload: string
}

export interface SlideByPosNextActionType {
    type: typeof SLIDE_BY_POS_NEXT,
    payload: Position
}

export interface SlideByPosPrevActionType {
    type: typeof SLIDE_BY_POS_PREV,
    payload: Position
}


export type SliderActionsTypes =
    SwapActionType |
    SlideByOneActionType |
    SlideByPosNextActionType |
    SlideByPosPrevActionType