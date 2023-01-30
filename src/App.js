import React from 'react'
import { 
  Box,
  Heading, 
  useColorMode,
} from '@chakra-ui/react';
import DarkModeButton from './components/DarkModeButton';
import FiltersBox from './components/FilterBox/FiltersBox';
import DoggysBox from './components/DoggysBox/DoggysBox';
import Loader from './components/Loader';
import Footer from './components/Footer';
import { fetchAllData } from './services';
import { createSelectedObject, filterBreedsBySubBreeds, selectedUpdate } from './utils'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const [allData, setAllData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [showData, setShowData] = React.useState(false)
  const [breedsList, setBreedsList] = React.useState([])
  const [subBreedsList, setSubBreedsList] = React.useState([])
  const [selectedBreeds, setSelectedBreeds] = React.useState([])
  const [selectedSubBreeds, setSelectedSubBreeds] = React.useState([])

  const [reqBreeds, setReqBreeds] = React.useState([])
  const [reqObj, setReqObj] = React.useState({})

  // HACE LA PETICION INICIAL DE TODA LA DATA
  React.useEffect( () => {
    fetchAllData()
    .then( (res) => {
        setAllData(res)
        setBreedsList(Object.keys(res.message))
    })
  },[])


  // ELIMINA LOS FILTROS DE SUB-RAZAS CADA VEZ QUE MODIFICAN LAS RAZAS FILTRADAS
  // AGREGA LAS OPCIONES DE SUB RAZAS DISPONIBLES SEGUN LAS RAZAS FILTRADAS
  React.useEffect( () => {
    selectedSubBreeds.forEach( (subBreed) =>{
      selectedUpdate(subBreed, setSubBreedsList, setSelectedSubBreeds)
    })
    setSubBreedsList([])
    let subBreeds = []
    selectedBreeds.forEach( breed => {
      if(allData.message[breed].length > 0){
        subBreeds = subBreeds.concat(allData.message[breed])
      }
    });
    if( subBreeds.length > 0){
      setSubBreedsList([...new Set(subBreeds)].sort())
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBreeds])


//FUNCION QUE ORDENA LA DATA SELECCIONADA PARA HACER LA PETICION A LA API
  function makeRequest(){
    setLoading(true)
    
    if(selectedSubBreeds.length > 0){
      const breedsToRequest = filterBreedsBySubBreeds({selectedBreeds, selectedSubBreeds, allData})
      setReqBreeds(breedsToRequest)
      setReqObj( createSelectedObject({breeds: breedsToRequest, allData, selectedSubBreeds}) )
      setShowData(true)
      setLoading(true)
    } else{
      setReqBreeds(selectedBreeds)
      setShowData(true)
      setLoading(true)
    }
}


  function returnToFilters(){
    selectedBreeds.forEach( (breed) => {
      selectedUpdate(breed, setBreedsList,  setSelectedBreeds)
    })
    setShowData(false)
  }


  return (
    <Box w='100vw' minH='100vh' display='grid' placeItems='center' bg={colorMode === 'light' ? 'blue.200' : 'blue.900'} >
      <DarkModeButton colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Box w='90%' maxW='700px' h='fit-content' my='4rem' bg={colorMode === 'light' ? 'whiteAlpha.800' : 'blackAlpha.500'} rounded='2xl' display='flex' flexDir='column' p='2rem' boxShadow='lg'>

        <Box mx='auto'>
          <Heading>Doggy APP 🐶</Heading>
        </Box>

        <FiltersBox 
          showData={showData} 
          selectedBreeds={selectedBreeds}
          breedsList={breedsList}
          setBreedsList={setBreedsList}
          setSelectedBreeds={setSelectedBreeds}
          colorMode={colorMode}
          loading={loading}
          selectedSubBreeds={selectedSubBreeds}
          subBreedsList={subBreedsList}
          setSubBreedsList={setSubBreedsList}
          setSelectedSubBreeds={setSelectedSubBreeds}
          makeRequest={makeRequest}
        />

        <Loader loading={loading} />

        <DoggysBox 
          colorMode={colorMode}
          reqBreeds={reqBreeds}
          reqObj={reqObj}
          setShowData={setShowData}
          showData={showData}
          returnToFilters={returnToFilters}
          setLoading={setLoading}
        />

      </Box>

      <Footer colorMode={colorMode} />

    </Box>
  );
}

export default App;
