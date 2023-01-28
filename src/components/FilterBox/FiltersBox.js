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
              placeholder={props.filteredBreedsArray.length === 0 ? 'Seleccionar raza' : 'Agregar raza'}
              dataArray={props.allBreedsList} 
              addFilterFunc={props.addFilter} 
              updateDataFunc={props.setAllBreedsList} 
              updateFilterFunc={props.setFilteredBreedsArray}
              isRequired
              bg={props.colorMode === 'light' ? 'white' : 'blue.900'}
              isDisabled={props.loading}
              />
              <TagFilter 
              dataArray={props.filteredBreedsArray} 
              deleteFilterFunc={props.deleteFilter} 
              updateFilterFunc={props.setFilteredBreedsArray} 
              updateDataFunc={props.setAllBreedsList} 
              isDisabled={props.loading}
              />
            </FormControl>

            <FormControl mt='1rem'>
              <FormLabel>Sub-raza:</FormLabel>
              <Selector 
              placeholder={props.filteredSubBreedsArray.length === 0 ? 'Mostrar todas' : 'Agregar sub raza'}
              dataArray={props.allSubBreedsList} 
              addFilterFunc={props.addFilter}
              updateDataFunc={props.setAllSubBreedsList} 
              updateFilterFunc={props.setFilteredSubBreedsArray}
              isDisabled={(props.allSubBreedsList.length <= 0 && true) || props.loading}
              bg={props.colorMode === 'light' ? 'white' : 'blue.900'}
              />
              <TagFilter 
              dataArray={props.filteredSubBreedsArray} 
              deleteFilterFunc={props.deleteFilter} 
              updateFilterFunc={props.setFilteredSubBreedsArray} 
              updateDataFunc={props.setAllSubBreedsList} 
              isDisabled={props.loading}
              />
            </FormControl>

            <Button 
             bg={props.colorMode === 'light' ? 'blue.600' : 'blue.900'} 
             colorScheme='blue'
             textColor={props.colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpa.500'} 
             mt='2rem'
             isDisabled={props.filteredBreedsArray.length === 0 && true} 
             onClick={props.makeRequest}
             boxShadow='lg'
             children={"Ver Doggy's 🐶❤️"}
             isLoading={props.loading}
            />

          </Box>
  )
}

export default FiltersBox