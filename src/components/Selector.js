import { Select } from '@chakra-ui/select'
import React from 'react'

function Selector({dataArray, placeholder, addFilterFunc, updateDataFunc, updateFilterFunc, isDisabled}) {


  return (
    <Select placeholder={placeholder} onChange={(e)=>addFilterFunc(e.target.value, updateFilterFunc, updateDataFunc)} value={''} isDisabled={isDisabled}>
        {
            dataArray.map( (data) => {
                return <option key={data} value={data}>{data}</option>
            })
        }
    </Select>
  )
}

export default Selector