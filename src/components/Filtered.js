import { 
    Tag, 
    TagLabel, 
    TagCloseButton, 
    Wrap, 
    WrapItem,
} from '@chakra-ui/react'
import React from 'react'


function Filtered({filterArray, updateFilter, updateDataArray }) {

    function updateValue(value){
        // Deleted the filtered one when "close it"
        let array = [...filterArray]
        array.splice(value, 1)
        updateFilter(array)

        // Add the deleted one to the original list
        updateDataArray((oldData) => [...oldData, value].sort() )
    }

  return (
    <Wrap  spacing='0.3rem' mt='1rem' justify='center'>
        {
            filterArray.map( (data) => {
                return (
                    <WrapItem key={data} >
                        <Tag key={data} variant='outline' colorScheme='gray' w='fit-content'>
                            <TagLabel>{data}</TagLabel>
                            <TagCloseButton onClick={() => {updateValue(data)}} />
                        </Tag>
                    </WrapItem>
                )
            })
        }
    </Wrap>
  )
}

export default Filtered