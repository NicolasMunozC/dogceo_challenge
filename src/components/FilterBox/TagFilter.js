import { 
    Tag, 
    TagLabel, 
    TagCloseButton, 
    Wrap, 
    WrapItem,
} from '@chakra-ui/react'
import React from 'react'


function TagFilter({dataArray, updateDataFunc, updateFilterFunc, isDisabled , selectedUpdate}) {

  return (
    <Wrap  spacing='0.3rem' mt='1rem' justify='center'>
        {
            dataArray.map( (data) => {
                return (
                    <WrapItem key={data} >
                        <Tag key={data} variant='outline' colorScheme='blue' w='fit-content' fontSize='md'>
                            <TagLabel>{data}</TagLabel>
                            <TagCloseButton onClick={() => {selectedUpdate(data, updateDataFunc, updateFilterFunc)}} isDisabled={isDisabled}/>
                        </Tag>
                    </WrapItem>
                )
            })
        }
    </Wrap>
  )
}

export default TagFilter