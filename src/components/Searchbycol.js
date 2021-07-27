import React from 'react';
import { Data } from '../utils/data';
import { useState } from 'react';
import { useMemo } from 'react';

export const Search1=(props)=>{
const [filterInput, setFilterInput] = useState("");
const data =useMemo(()=>Data,[])
const handleFilterChange = e => {
    const value = e.target.value || undefined;
    // setFilter("show.name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput('data.key',value);
    setFilterInput(value);
  };
  return (
  <input
  value={filterInput}
  onChange={handleFilterChange}
  placeholder={"Search name"}
/>
  )
}