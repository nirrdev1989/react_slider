import React from 'react'

export default function SliderContainer({ children }: any) {
   return (
      <React.Fragment>
         <div className="container">
            {children}
         </div>
      </React.Fragment>
   )
}
