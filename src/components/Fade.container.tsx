import React from 'react'

export default function FadeContainer({ children }: any) {
   return (
      <React.Fragment>
         <div className="animate-center">
            {children}
         </div>
      </React.Fragment>
   )
}
