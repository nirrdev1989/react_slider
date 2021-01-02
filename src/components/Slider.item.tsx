import React from 'react'
import { Gallery } from '../data'
import Button from './Button'
import FadeContainer from './Fade.container'
import { ArrowUp, ArrowDown } from "../icons/index"
import { connect } from 'react-redux'
import { swapAction } from '../redux/slider/slider.actions'
import { Position, Swap } from '../redux/slider/slider.actions.types'


interface SliderItemProps {
   item: Gallery,
   swapRowUp: (swap: Swap) => void
   swapRowDown: (swap: Swap) => void

}

function SliderItem({ item, swapRowUp, swapRowDown }: SliderItemProps) {
   return (
      <React.Fragment>
         <FadeContainer>
            <Button action={swapRowUp} content={ArrowUp} />
            <div className={` shadow-sm mt-2 mb-2`}>
               {<img
                  width="250"
                  height="250"
                  src={item.image}
               />}
            </div>
            <Button action={swapRowDown} content={ArrowDown} />
         </FadeContainer>
      </React.Fragment>
   )
}

// function mapStateToProps(dispatch: Function) {
//    return {
//       swap: (swap: Swap) => dispatch(swapAction(swap))
//    }
// }

export default SliderItem