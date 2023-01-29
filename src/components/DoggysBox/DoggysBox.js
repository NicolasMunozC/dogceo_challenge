import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import DoggyCard from './DoggyCard'

function DoggysBox({colorMode, returnToFilters, reqBreeds, reqObj, showData, setShowData, setLoading}) {

  return (
        <Box w='100%' h='fit-content' mt='2rem' display='flex' flexDir='column' hidden={!showData}>
          <Button 
             bg={colorMode === 'light' ? 'blue.600' : 'blue.900'} 
             colorScheme='blue'
             textColor={colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpa.500'} 
             mb='1rem'
             onClick={returnToFilters}
             boxShadow='lg'
             children={"Volver"}
            />
          { 
            reqBreeds.map((breed) => {
              return (
                <DoggyCard 
                 key={breed}
                 colorMode={colorMode}
                 breed={breed}
                 reqObj={reqObj}
                 setShowData={setShowData}
                 setLoading={setLoading}
                />
              )
            })
          }
        </Box>
  )
}

export default DoggysBox