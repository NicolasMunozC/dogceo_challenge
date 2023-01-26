import { Select } from '@chakra-ui/select'
import React from 'react'

function Selector({dataArray, updateDataArray, placeholder, updateFilterArray}) {

    function setValues(e){

        // Update FilterArray, adding the selected one
        const newData = e.target.value
        updateFilterArray((oldData) => [...oldData, newData] )

        //  Update de dataArray deleting the selected one
        updateDataArray(dataArray.filter( data => data!== newData))
    }
  return (
    <Select placeholder={placeholder} onChange={setValues} value={''}>
        {
            dataArray.map( (data) => {
                return <option key={data} value={data}>{data}</option>
            })
        }
    </Select>
  )
}

export default Selector