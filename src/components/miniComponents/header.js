import React from 'react'
import ShapeDivider from '../assets/shape-divider.png'

function header({page,description}) {
   return(
      <div className ="single">
         <img src={ShapeDivider} alt={`shape divider for ${page} page`}/>
         <div>
               <h1>{description}</h1>
            </div>
      </div>
   )
   
}
export default header
