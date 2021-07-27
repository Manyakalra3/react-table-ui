import React,{Component} from 'react'
//this component is for global search 
export const GlobalFilter=({globalfilter,setGlobalFilter})=>{
    // function print(e){
    //     console.log(e.target.value);
    // }
    // const mystyle={
    //    margin: 'auto 0px'

    // }

    return (
     <>
            
     <input style={{marginLeft:'27%'}} placeholder={'Search'} value ={globalfilter||''} onChange={(e)=>{
          setGlobalFilter(e.target.value||'');
          console.log(e.target.value);
                     }}/>
               
           
          
        </>
        
    )
}
