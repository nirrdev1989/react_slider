import React from 'react';
import { connect, useSelector } from 'react-redux';
import './App.css';
import Button from './components/Button';
import SliderContainer from './components/Slider.container';
import SliderItem from './components/Slider.item';
import { slideByOneAction, slideByPosNextAction, slideByPosPrevAction, swapAction } from './redux/slider/slider.actions';
import { Position, Swap } from './redux/slider/slider.actions.types';
import { RootState } from './redux/store';
import { ArrowLeft, ArrowRight, ArrowLeftDouble, ArrowRightDouble, ArrowSwap } from "./icons/index";


interface AppProps {
   swap: (swap: Swap) => void
   slideOne: (slideTo: string) => void
   slidePosNext: (pos: Position) => void
   slidePosPrev: (pos: Position) => void
}


function App({ swap, slideOne, slidePosNext, slidePosPrev }: AppProps) {
   const { gallery, pos } = useSelector((state: RootState) => state.slider)
   return (
      <React.Fragment>
         <SliderContainer>
            <Button action={() => slidePosPrev({ start: 3, end: 3 })} content={ArrowLeftDouble} />
            <div className="grin-container ">
               <Button action={() => slideOne('prev')} content={ArrowLeft} />
               {gallery.slice(pos.start, pos.end).map((item, i, list) => {
                  console.log(i, i + 1)
                  return (
                     <React.Fragment>
                        <SliderItem
                           key={item.id}
                           item={item}
                           swapRowUp={() => swap({ indexOne: pos.start + i, indexTwo: (pos.start + i + 3) % gallery.length })}
                           swapRowDown={() => swap({ indexOne: pos.start + i, indexTwo: ((pos.start + i - 3) + gallery.length) % gallery.length })}
                        />
                        {!(list.length - 1 === i) &&
                           <Button action={() => {
                              swap({ indexOne: pos.start + i, indexTwo: pos.start + i + 1 })
                           }} content={ArrowSwap} />}
                     </React.Fragment>
                  )
               })}
               <Button action={() => slideOne('next')} content={ArrowRight} />
            </div>
            <Button action={() => slidePosNext({ start: 3, end: 3 })} content={ArrowRightDouble} />
         </SliderContainer>
      </React.Fragment>
   );
}



function mapDispatchToProps(dispatch: Function) {
   return {
      swap: (swap: Swap) => dispatch(swapAction(swap)),
      slideOne: (slideTo: string) => dispatch(slideByOneAction(slideTo)),
      slidePosNext: (pos: Position) => dispatch(slideByPosNextAction(pos)),
      slidePosPrev: (pos: Position) => dispatch(slideByPosPrevAction(pos))
   }
}

export default connect(null, mapDispatchToProps)(App);



