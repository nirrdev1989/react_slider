import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { sliderReducer } from "./slider/slider.reducer";

const rootReducer = combineReducers({
    slider: sliderReducer
})

const middleweres = [logger]

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(...middleweres))