import React from 'react'

export default function Button({ action, content }: any) {
   return (
      <React.Fragment>
         <div>
            <button className="btn btn-light" onClick={action}>{content} </button>
         </div>
      </React.Fragment>
   )
}
