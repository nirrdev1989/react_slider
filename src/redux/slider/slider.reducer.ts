import { gallery, Gallery } from "../../data";
import { Position, SliderActionsTypes, SLIDE_BY_ONE, SLIDE_BY_POS_NEXT, SLIDE_BY_POS_PREV, SWAP } from "./slider.actions.types";
import { slideOneActionUtil, swapActionUtil } from "./utils";

export interface SliderState {
    gallery: Gallery[]
    pos: Position
}

const INITIAL_STATE: SliderState = {
    gallery: gallery,
    pos: {
        start: 0,
        end: 3
    }
}


export function sliderReducer(state = INITIAL_STATE, action: SliderActionsTypes) {
    switch (action.type) {
        case SWAP:
            return {
                ...state,
                gallery: [...swapActionUtil(state.gallery, action.payload.indexOne, action.payload.indexTwo)]
            }
        case SLIDE_BY_ONE:
            return {
                ...state,
                gallery: [...slideOneActionUtil(state.gallery, action.payload)]
            }
        case SLIDE_BY_POS_NEXT:
            return {
                ...state,
                pos: {
                    start: (state.pos.start + action.payload.start) % state.gallery.length,
                    end: (state.pos.end) % state.gallery.length + action.payload.end
                }
            }
        case SLIDE_BY_POS_PREV:
            return {
                ...state,
                pos: {
                    start: state.pos.start === 0 ? 6 : state.pos.start - action.payload.start,
                    end: state.pos.end === 3 ? 9 : state.pos.end - action.payload.end
                }
            }
        default:
            return state
    }
}

