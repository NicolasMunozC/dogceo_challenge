import { Select } from '@chakra-ui/select'
import React from 'react'

function Selector({dataArray, updateDataArray, placeholder, updateFilterArray}) {

    function setValues(e){

        // Update FilterArray, adding the selected one
        const newData = e.target.value
        updateFilterArray((oldData) => [...oldData, newData] )

        //  Update de dataArray deleting the selected one
        let array = [...dataArray]
        array.splice(newData, 1)
        updateDataArray(array)
    }
  return (
    <Select placeholder={placeholder} onChange={setValues}>
        {
            dataArray.map( (data) => {
                return <option key={data} value={data}>{data}</option>
            })
        }
    </Select>
  )
}

export default Selector