import {Checkbox} from './checkbox';
export const Format=[
    // {
    //     Header :'Select',
    //     Cell:cell=> <input type="checkbox" onclick={Checkbox}></input>


    // },
    {
        Header:'key',
        //Cell:cell=>{console.log(cell)},
        // Cell: cell=> 
        // <input type="checkbox"/>,
        
        accessor:'label'
    },
    {
        Header:'Value',
        // Cell: cell=> { for(var i=0;i<cell.data.length;i++)
        //     // console.dir(cell.data[i].field.type);
        
        //     if (cell.data[i].field.type == "text" ) return (<input type="text"/>)

        // }
        Cell: cell=>{console.log(cell.cell.row.original.field.defaultValue);
            var options =cell.cell.row.original.field;
           
            if (cell.cell.row.original.field.type=="text")
    return <input type="text" placeholder={cell.cell.row.original.field.defaultValue}/>
else if(cell.cell.row.original.field.type=="select")

return <select>
    <option>{options.options[0]}</option>
    <option>{options.options[1]}</option>
</select>
}
        //Cell: ({ cell: { values } })=> values.field.type ,
        //accessor:'field[type]'
    },
    {        Header:'Description',
        accessor:'description'
    }
];