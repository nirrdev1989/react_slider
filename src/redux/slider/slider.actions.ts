import { Position, SlideByPosPrevActionType, SlideByOneActionType, SlideByPosNextActionType, SLIDE_BY_ONE, SLIDE_BY_POS_NEXT, SLIDE_BY_POS_PREV, SWAP, Swap, SwapActionType } from "./slider.actions.types";

export function swapAction(swap: Swap): SwapActionType {
    return {
        type: SWAP,
        payload: swap
    }
}

export function slideByOneAction(slideTo: string): SlideByOneActionType {
    return {
        type: SLIDE_BY_ONE,
        payload: slideTo
    }
}

export function slideByPosNextAction(pos: Position): SlideByPosNextActionType {
    return {
        type: SLIDE_BY_POS_NEXT,
        payload: pos
    }
}

export function slideByPosPrevAction(pos: Position): SlideByPosPrevActionType {
    return {
        type: SLIDE_BY_POS_PREV,
        payload: pos
    }
}