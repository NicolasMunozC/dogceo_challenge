import { Box, Button, FormControl, FormLabel, Heading } from '@chakra-ui/react'
import React from 'react'
import TagFilter from './TagFilter'
import Selector from './Selector'

function FiltersBox(props) {
  return (
    <Box mt='3rem' w='100%' display='flex' flexDir='column' hidden={props.showData}>
            <Heading textAlign='center' fontSize='lg' textTransform='uppercase'>Filtros</Heading>

            <FormControl mt='1rem'>
              <FormLabel>Raza:</FormLabel>
              <Selector 
              placeholder={props.selectedBreeds.length === 0 ? 'Seleccionar raza' : 'Agregar raza'}
              dataArray={props.breedsList} 
              updateDataFunc={props.setBreedsList} 
              updateFilterFunc={props.setSelectedBreeds}
              isRequired
              bg={props.colorMode === 'light' ? 'white' : 'blue.900'}
              isDisabled={props.loading}
              />
              <TagFilter 
              dataArray={props.selectedBreeds} 
              updateFilterFunc={props.setSelectedBreeds} 
              updateDataFunc={props.setBreedsList} 
              isDisabled={props.loading}
              />
            </FormControl>

            <FormControl mt='1rem'>
              <FormLabel>Sub-raza:</FormLabel>
              <Selector 
              placeholder={props.selectedSubBreeds.length === 0 ? 'Mostrar todas' : 'Agregar sub raza'}
              dataArray={props.subBreedsList} 
              updateDataFunc={props.setSubBreedsList} 
              updateFilterFunc={props.setSelectedSubBreeds}
              isDisabled={(props.subBreedsList.length <= 0 && true) || props.loading}
              bg={props.colorMode === 'light' ? 'white' : 'blue.900'}
              />
              <TagFilter 
              dataArray={props.selectedSubBreeds} 
              updateFilterFunc={props.setSelectedSubBreeds} 
              updateDataFunc={props.setSubBreedsList} 
              isDisabled={props.loading}
              />
            </FormControl>

            <Button 
             bg={props.colorMode === 'light' ? 'blue.600' : 'blue.900'} 
             colorScheme='blue'
             textColor={props.colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpa.500'} 
             mt='2rem'
             isDisabled={props.selectedBreeds.length === 0 && true} 
             onClick={props.makeRequest}
             boxShadow='lg'
             children={"Ver Doggy's 🐶❤️"}
             isLoading={props.loading}
            />

          </Box>
  )
}

export default FiltersBox