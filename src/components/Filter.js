import { 
    Tag, 
    TagLabel, 
    TagCloseButton, 
    Wrap, 
    WrapItem,
} from '@chakra-ui/react'
import React from 'react'


function Filter({dataArray, deleteFilterFunc, updateDataFunc, updateFilterFunc }) {

  return (
    <Wrap  spacing='0.3rem' mt='1rem' justify='center'>
        {
            dataArray.map( (data) => {
                return (
                    <WrapItem key={data} >
                        <Tag key={data} variant='outline' colorScheme='gray' w='fit-content'>
                            <TagLabel>{data}</TagLabel>
                            <TagCloseButton onClick={() => {deleteFilterFunc(data, updateFilterFunc, updateDataFunc, )}} />
                        </Tag>
                    </WrapItem>
                )
            })
        }
    </Wrap>
  )
}

export default Filter