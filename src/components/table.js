import React, { useMemo } from 'react'
import './Table.css';
import {useTable,useGlobalFilter,useFilters, useRowSelect} from 'react-table';
// import Data from '../utils/data.json';
import { Data } from '../utils/data';
import { Format } from './format';
import { GlobalFilter } from './Search';
import {IndeterminateCheckbox} from './checkbox';
import {Showselected} from './Showselected'
// import { Search1 } from './Search1';
export const Table=(props)=> {
    const columns = useMemo(()=>Format,[])
    // const selectedcolums=useMemo(()=>selectedFlatRows[].original,[])
    const data =useMemo(()=>Data,[])
   const tableInstance= useTable({
    columns:columns,
    data:data,
    },useGlobalFilter,
    useFilters,
    
    useRowSelect,
    hooks => {
        hooks.visibleColumns.push(columns => [
         
          {
            id: 'selection',
            
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...columns,
        ])
      }
    )
  
    
   
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setchecked,
       setGlobalFilter,
       selectedFlatRows,
       state: { selectedRowIds },
        prepareRow,
        setFilter,
    }=tableInstance;
    const{checked}=state;
    const {globalFilter}=state;
    const{filter}=state;
    return (
        <>
        
        <GlobalFilter setGlobalFilter={setGlobalFilter} globalfilter ={globalFilter}/>
       <Showselected checked={checked} setchecked={setchecked}/>
       
      {/* <Search1 filterInput ={globalFilter} setFilterInput = {setGlobalfilter}/> */}
      
        <table{...getTableProps()}>
           <thead>
               {
                   headerGroups.map(headerGroup=>(
                    <tr{...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                        <th{...column.getHeaderProps()}>{column.render('Header')}</th>  
                    ))
                        
                    }
                   
                </tr>
                   ))
               }
               
            </thead> 
           <tbody{...getTableBodyProps()}>
           {
               rows.map(row=>{
                   prepareRow(row)
                   return(
                    <tr{...row.getRowProps}>
                    {

                        row.cells.map(cell=>{
                            
                            return( <td{...cell.getCellProps()}>{cell.render('Cell')}</td>)
                        })
                    }
                   
                </tr>
                   )
               })
           }
           
           </tbody>
           </table>
           <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <pre>
        <code>

          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows.original': selectedFlatRows.map(
                d => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre>
        </>
    )
}
