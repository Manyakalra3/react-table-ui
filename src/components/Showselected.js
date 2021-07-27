
import React, { useState } from 'react'
import {Data} from '../utils/data';
export function Showselected(){
    
        
       // console.log(e.target);
    
       const[checked,setchecked]=useState('');

    return (
        <>
       
        <span>
        <input type="checkbox" value={checked} onChange={e=>{setchecked(e.target.checked);
        console.log('......',e.target.checked)}}/>
        show selected
         {/* //<h4>show selected</h4>  */}
         </span>
        </>
    )
}
    

