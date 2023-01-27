import { Select } from '@chakra-ui/select'
import React from 'react'

function Selector({dataArray, placeholder, addFilterFunc, updateDataFunc, updateFilterFunc, isDisabled, isRequired, bg}) {


  return (
    <Select 
    placeholder={placeholder} 
    onChange={(e)=>addFilterFunc(e.target.value, updateFilterFunc, updateDataFunc)} 
    value={''} 
    isDisabled={isDisabled} 
    isRequired={isRequired} 
    variant='outline' bg={bg}
    borderWidth={0}
    boxShadow='lg'
    >
        {
            dataArray.map( (data) => {
                return <option key={data} value={data}>{data}</option>
            })
        }
    </Select>
  )
}

export default Selector