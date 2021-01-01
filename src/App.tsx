import React from 'react';
import { connect, useSelector } from 'react-redux';
import './App.css';
import Button from './components/Button';
import SliderContainer from './components/Slider.container';
import SliderItem from './components/Slider.item';
import { slideByOneAction, slideByPosNextAction, slideByPosPrevAction, swapAction } from './redux/slider/slider.actions';
import { Position, Swap } from './redux/slider/slider.actions.types';
import { RootState } from './redux/store';

interface AppProps {
   swap: (swap: Swap) => void
   slideOne: (slideTo: string) => void
   slidePosNext: (pos: Position) => void
   slidePosPrev: (pos: Position) => void

}


function App({ swap, slideOne, slidePosNext, slidePosPrev }: AppProps) {
   const { gallery, pos } = useSelector((state: RootState) => state.slider)
   console.log(gallery)
   return (
      <React.Fragment>
         <SliderContainer>
            <Button action={() => slidePosPrev({ start: pos.start, end: pos.end })} content={"<<"} />
            <div className="grin-container ">
               <Button action={() => slideOne('prev')} content={"<"} />
               {gallery.slice(pos.start, pos.end).map((item, i, list) => {
                  return <>
                     <SliderItem key={item.id} item={item} />
                     {!(list.length - 1 === i) &&
                        <Button action={() => {
                           swap({ indexOne: pos.start + i, indexTwo: pos.start + i + 1 })
                        }} content={"< >"} />}
                  </>
               })}
               <Button action={() => slideOne('next')} content={">"} />
            </div>
            <Button action={() => slidePosNext({ start: pos.start, end: pos.end })} content={">>"} />
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



