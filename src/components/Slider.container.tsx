import React from 'react'

export default function SliderContainer({ children }: any) {
   return (
      <React.Fragment>
         <div className="container">
            {/* <div className="container-fluid"> */}
            {children}
            {/* </div> */}
         </div>
      </React.Fragment>
   )
}
