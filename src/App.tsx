import React, { useEffect, useState } from 'react';
import './App.css';
import SliderContainer from './components/Slider.container';
import { Gallery, gallery } from "./data";



function App() {
   const [pos, setPos] = useState({ start: 0, end: 3 })
   const [currentList, setCurrentList] = useState<Gallery[]>([])


   useEffect(() => {

      setCurrentList(() => {
         return [
            ...gallery.slice(pos.start, pos.end)
         ]
      })

   }, [pos])

   return (
      <React.Fragment>
         <main>
            <SliderContainer>
               <div className="row">
                  <div id="con">
                     <button onClick={() => setPos((prev) => {
                        return {
                           start: (prev.start + 3) % gallery.length,
                           end: (prev.end) % gallery.length + 3
                        }
                     })} >{"<"} </button>
                     {currentList.map((item, i, list) => {
                        return (
                           <div key={item.id} className="col-sm-6 col-md-3">
                              <div className="card">
                                 <img width="100%" height="300" src={`${item.image}`} />
                              </div>
                              {i !== 0 && <button onClick={() => {
                                 let temp = list[i]
                                 list[i] = list[i - 1]
                                 list[i - 1] = temp

                                 console.log(list)

                                 setCurrentList(() => {
                                    return [
                                       ...list
                                    ]
                                 })
                              }}>{"< >"}</button>}
                           </div>
                        )
                     })}
                     <button onClick={() => setPos((prev) => {
                        return {
                           start: prev.start === 0 ? 6 : prev.start - 3,
                           end: prev.end === 3 ? 9 : prev.end - 3
                        }
                     })} > {">"} </button>
                  </div>
               </div>
            </SliderContainer>
         </main>
      </React.Fragment>
   );
}

export default App;
