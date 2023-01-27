import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import DoggyCard from './DoggyCard'

function DoggysBox(props) {
  return (
        <Box w='100%' h='fit-content' mt='2rem' display='flex' flexDir='column' hidden={!props.showData}>
          <Button 
             bg={props.colorMode === 'light' ? 'blue.600' : 'blue.900'} 
             colorScheme='blue'
             textColor={props.colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpa.500'} 
             mb='1rem'
             onClick={()=>props.setShowData(false)}
             boxShadow='lg'
             children={"Volver"}
            />
          { 
            props.filteredBreedsArray.map((breed, index) => {
              return (
                <DoggyCard 
                 key={breed}
                 colorMode={props.colorMode}
                 breed={breed}
                 breedRandomImage={props.randomBreedsImages[index]}
                 subBreeds={props.filteredSubBreedsArray}
                 showData={props.showData}
                />
              )
            })
          }
        </Box>
  )
}

export default DoggysBox