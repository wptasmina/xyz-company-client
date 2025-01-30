import * as React from 'react';
import { Helmet } from 'react-helmet-async'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Payment() {
    const [pay, setPay] = React.useState('');

    const handleChange = (event) => {
      setPay(event.target.value);
    };

  return (
    <div className='bg-blue-gray-100/50 '>
         <Helmet>
            <title>TrakSmart || Payment </title>
          </Helmet>

    <div className='py-10 w-10/12 mx-auto '>
          <div className='flex flex-col justify-center items-center'>
             <p className='text-orange-500 pb-2'>---Please pay to eat---</p>
             <h1 className='text-[#131c58] text-center py-2 font-bold border-t-2 border-b-2 border-gray-400 w-52 '>PAYMENT</h1>
          </div>

    {/* select button  */}
    <div className='my-10'>
    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
      <InputLabel id="demo-select-small-label">Pay</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={pay}
        label="Pay"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>SSL Commerze</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
    </FormControl>
    </div>     

    
    </div>
    </div>
  )
}
