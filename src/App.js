import React from 'react'
import './App.css';
import { 
  Box,
  FormControl,
  FormLabel,
  Heading, 
  Link, 
  Text,
} from '@chakra-ui/react';
import Selector from './components/Selector';
import Filtered from './components/Filtered';

function App() {

  // const [loading, setLoading] = React.useState(true)
  const [allBreedsList, setAllBreedsList] = React.useState([])
  const [filteredBreadsArray, setFilteredBreadsArray] = React.useState([])

  React.useEffect( () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then( (res) => res.json())
    .then( (res) => {
      const breeds = Object.keys(res.message)
      setAllBreedsList(breeds)
      // setLoading(false)
    })
    .catch( (err) => {
      console.log(err);
    })
  },[])

  // React.useEffect( () => {
  //   console.log(allBreedsList);
  // },[allBreedsList])

  return (
    <Box w='100vw' h='100vh' display='grid' placeItems='center' bg='blue.100'>
      <Box w='90%' h='90%' bg='whiteAlpha.800' rounded='2xl' display='flex' flexDir='column' p='2rem' boxShadow='lg'>

        <Box mx='auto'>
          <Heading>Doggy APP</Heading>
        </Box>
        <Box mt='3rem' w='100%' display='flex' flexDir='column'>
          <Heading textAlign='center' fontSize='lg' textTransform='uppercase'>Filtros</Heading>
          <FormControl mt='1rem'>
            <FormLabel>Raza:</FormLabel>
            <Selector placeholder='Selecionar raza' dataArray={allBreedsList} updateDataArray={setAllBreedsList} filterArray={filteredBreadsArray} updateFilterArray={setFilteredBreadsArray}/>
            <Filtered filterArray={filteredBreadsArray} updateFilter={setFilteredBreadsArray} updateDataArray={setAllBreedsList} />
          </FormControl>
          <FormControl mt='1rem'>
            <FormLabel>Sub-raza:</FormLabel>
            {/* <Selector dataArray={allBreedsList} placeholder='Selecionar raza' setFilterArray={setFilteredBreadsArray}/> */}
          </FormControl>
        </Box>
      </Box>
      <Text 
      pos='absolute' 
      bottom='0.5rem' 
      right='0.5rem' 
      textColor='#3D3D3D'>
        Creado con ❤️ por 
        <Link fontWeight='extrabold' href='https://nicolasmunozc.github.io'>Nicolas Muñoz</Link>
      </Text>
    </Box>
  );
}

export default App;
