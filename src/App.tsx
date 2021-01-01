import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import SliderContainer from './components/Slider.container';
import SliderItem from './components/Slider.item';
import { Gallery, gallery } from "./data";



function App() {
   const [pos, setPos] = useState({ start: 0, end: 3 })
   const [currentList, setCurrentList] = useState<Gallery[]>([])

   useEffect(() => {
      setCurrentList(() => {
         return gallery.slice(pos.start, pos.end)
      })
   }, [pos])

   function next() {
      setPos((prev) => {
         return {
            start: (prev.start + 3) % gallery.length,
            end: (prev.end) % gallery.length + 3
         }
      })
   }

   function prev() {
      setPos((prev) => {
         return {
            start: prev.start === 0 ? 6 : prev.start - 3,
            end: prev.end === 3 ? 9 : prev.end - 3
         }
      })
   }

   function slideOneNext() {
      let newGallery = [...gallery]
      let temp = newGallery[0]
      newGallery[0] = newGallery[newGallery.length - 1]
      newGallery[newGallery.length - 1] = temp
      setCurrentList(() => {
         return newGallery.slice(0, 3)
      })
      console.log(newGallery)

      // setPos((prev) => {
      //    return {
      //       start: (prev.start + 1) % gallery.length,
      //       end: (prev.end + 1) % gallery.length
      //    }
      // })

   }

   function slideOnePrev() { }

   function swap(indexOne: number, indexTwo: number) {
      let list = [...currentList]
      let temp = list[indexOne]
      list[indexOne] = list[indexTwo]
      list[indexTwo] = temp

      setCurrentList(() => {
         return [
            ...list
         ]
      })
   }

   return (
      <React.Fragment>
         <SliderContainer>
            <Button action={prev} content={"<<"} />
            <div className="grin-container ">
               <Button action={slideOnePrev} content={"<"} />
               {currentList.map((item, i, list) => {
                  console.log(item)
                  // console.log(pos)
                  return <>
                     <SliderItem key={item.id} item={item} />
                     {!(list.length - 1 === i) &&
                        <Button action={() => swap(i, i + 1)} content={"< >"} />}
                  </>
               })}
               <Button action={slideOneNext} content={">"} />
            </div>
            <Button action={next} content={">>"} />
         </SliderContainer>
      </React.Fragment>
   );
}

export default App;



