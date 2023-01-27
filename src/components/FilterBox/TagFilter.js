import { 
    Tag, 
    TagLabel, 
    TagCloseButton, 
    Wrap, 
    WrapItem,
} from '@chakra-ui/react'
import React from 'react'


function TagFilter({dataArray, deleteFilterFunc, updateDataFunc, updateFilterFunc, isDisabled }) {

  return (
    <Wrap  spacing='0.3rem' mt='1rem' justify='center'>
        {
            dataArray.map( (data) => {
                return (
                    <WrapItem key={data} >
                        <Tag key={data} variant='outline' colorScheme='blue' w='fit-content' fontSize='md'>
                            <TagLabel>{data}</TagLabel>
                            <TagCloseButton onClick={() => {deleteFilterFunc(data, updateFilterFunc, updateDataFunc, )}} isDisabled={isDisabled}/>
                        </Tag>
                    </WrapItem>
                )
            })
        }
    </Wrap>
  )
}

export default TagFilter