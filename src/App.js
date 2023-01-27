import React from 'react'
import './App.css';
import { 
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading, 
  Link, 
  Spinner, 
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Selector from './components/Selector';
import Filter from './components/Filter';
import DarkModeButton from './components/DarkModeButton';
import DoggyBox from './components/DoggyBox';

function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const [loading, setLoading] = React.useState(false)
  const [showData, setShowData] = React.useState(false)
  const [allBreedsList, setAllBreedsList] = React.useState([])
  const [allSubBreedsList, setAllSubBreedsList] = React.useState([])
  const [filteredBreedsArray, setFilteredBreedsArray] = React.useState([])
  const [filteredSubBreedsArray, setFilteredSubBreedsArray] = React.useState([])

  // HACE LA PETICION INICIAL DE TODA LA DATA
  React.useEffect( () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then( (res) => res.json())
    .then( (res) => {
      const breeds = Object.keys(res.message)
      const rawSubBreedsData = Object.values(res.message).flat()
      const subBreeds = Array.from(new Set(rawSubBreedsData)).sort()

      setAllBreedsList(breeds)
      setAllSubBreedsList(subBreeds)
    })
    .catch( (err) => {
      console.log(err);
    })
  },[])

  // ELIMINA LOS FILTROS DE SUB-RAZAS CADA VEZ QUE ELIMINAN TODAS LAS RAZAS FILTRADAS
  React.useEffect( () => {
    if(filteredBreedsArray.length === 0){
      setFilteredSubBreedsArray([])
    }
  }, [allBreedsList])

  // Se puede refactorizar ambas funciones y crear una solo funcion que haga las dos cosas dependiendo de la orden que el detonante.
  function deleteFilter(value, updateFilterArray, updateDataArray){
    updateFilterArray((oldData) => oldData.filter( data => data !== value))
    updateDataArray((oldData) => [...oldData, value].sort() )
  }
  
  // Se puede refactorizar ambas funciones y crear una solo funcion que haga las dos cosas dependiendo de la orden que el detonante.
  function addFilter(value, updateFilterArray, updateDataArray){
    updateFilterArray((oldData) => [...oldData, value] )
    updateDataArray((oldData) => oldData.filter( data => data!== value))
  }

  function makeRequest(){
    setLoading(true)

    if(filteredSubBreedsArray.length > 0){
      console.log('SI HAY SUB RAZAS');
    }

    setTimeout( () => {
      setLoading(false)
    },3000)
  }

  // React.useEffect(()=>{
  //   console.log('Lista de sub razas:',allSubBreedsList);
  //   console.log('Lista de sub razas filtradas:',filteredSubBreedsArray);
  // },[allSubBreedsList, filteredSubBreedsArray])


  return (
    <Box w='100vw' h='100vh' display='grid' placeItems='center' bg={colorMode === 'light' ? 'blue.200' : 'blue.900'} >
      <DarkModeButton colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Box w='90%' h='fit-content' bg={colorMode === 'light' ? 'whiteAlpha.800' : 'blackAlpha.500'} rounded='2xl' display='flex' flexDir='column' p='2rem' boxShadow='lg'>

        <Box mx='auto'>
          <Heading>Doggy APP 🐶</Heading>
        </Box>

          <Box mt='3rem' w='100%' display='flex' flexDir='column'>
            <Heading textAlign='center' fontSize='lg' textTransform='uppercase'>Filtros</Heading>

            <FormControl mt='1rem'>
              <FormLabel>Raza:</FormLabel>
              <Selector 
              placeholder={filteredBreedsArray.length === 0 ? 'Seleccionar raza' : 'Agregar raza'}
              dataArray={allBreedsList} 
              addFilterFunc={addFilter} 
              updateDataFunc={setAllBreedsList} 
              updateFilterFunc={setFilteredBreedsArray}
              isRequired
              bg={colorMode === 'light' ? 'white' : 'blue.900'}
              isDisabled={loading}
              />
              <Filter 
              dataArray={filteredBreedsArray} 
              deleteFilterFunc={deleteFilter} 
              updateFilterFunc={setFilteredBreedsArray} 
              updateDataFunc={setAllBreedsList} 
              isDisabled={loading}
              />
            </FormControl>

            <FormControl mt='1rem'>
              <FormLabel>Sub-raza:</FormLabel>
              <Selector 
              placeholder={filteredSubBreedsArray.length === 0 ? 'Mostrar todas' : 'Agregar sub raza'}
              dataArray={allSubBreedsList} 
              addFilterFunc={addFilter}
              updateDataFunc={setAllSubBreedsList} 
              updateFilterFunc={setFilteredSubBreedsArray}
              isDisabled={(filteredBreedsArray.length <= 0 && true) || loading}
              bg={colorMode === 'light' ? 'white' : 'blue.900'}
              />
              <Filter 
              dataArray={filteredSubBreedsArray} 
              deleteFilterFunc={deleteFilter} 
              updateFilterFunc={setFilteredSubBreedsArray} 
              updateDataFunc={setAllSubBreedsList} 
              isDisabled={loading}
              />
            </FormControl>

            <Button 
            type='submit' 
            bg={colorMode === 'light' ? 'blue.600' : 'blue.900'} 
            colorScheme='blue'
            textColor={colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpa.500'} 
            mt='2rem'
            isDisabled={filteredBreedsArray.length === 0 && true} 
            onClick={makeRequest}
            boxShadow='lg'
            children={"Ver Doggy's 🐶❤️"}
            isLoading={loading}
            />

          </Box>

        <Box w='100%' h='fit-content' mt='2rem' display='flex' flexDir='column'>
          <Spinner mx='auto' hidden={!loading} mb='1rem' />
          <Text textAlign='center' hidden={!loading}>Cargando... </Text>
          { !showData &&
            filteredBreedsArray.map(breed => {
              return <DoggyBox breed={breed} subBreeds={filteredBreedsArray} />
            })
          }
        </Box>

      </Box>

        <Text 
        pos='absolute' 
        bottom='0.5rem' 
        right='0.5rem' 
        textColor={colorMode === 'light' ? 'blackAlpha.800' : 'whiteAlpha.800'}>
          Creado con ❤️ por 
          <Link fontWeight='extrabold' ml='0.2rem' href='https://nicolasmunozc.github.io'>Nicolas Muñoz</Link>
        </Text>

    </Box>
  );
}

export default App;
