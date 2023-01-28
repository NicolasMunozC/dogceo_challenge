import React from 'react'
import './App.css';
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

function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const [allData, setAllData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [showData, setShowData] = React.useState(false)
  const [allBreedsList, setAllBreedsList] = React.useState([])
  const [allSubBreedsList, setAllSubBreedsList] = React.useState([])
  const [filteredBreedsArray, setFilteredBreedsArray] = React.useState([])
  const [filteredSubBreedsArray, setFilteredSubBreedsArray] = React.useState([])

  const [reqBreeds, setReqBreeds] = React.useState([])
  const [reqObj, setReqObj] = React.useState({})

  // HACE LA PETICION INICIAL DE TODA LA DATA
  React.useEffect( () => {
      fetch('https://dog.ceo/api/breeds/list/all')
      .then( (res) => res.json())
      .then ( (res) => {
        setAllData(res)
        setAllBreedsList(Object.keys(res.message))
      })
  },[])


  // ELIMINA LOS FILTROS DE SUB-RAZAS CADA VEZ QUE MODIFICAN LAS RAZAS FILTRADAS
  // AGREGA LAS OPCIONES DE SUB RAZAS DISPONIBLES SEGUN LAS RAZAS FILTRADAS
  React.useEffect( () => {
    filteredSubBreedsArray.forEach( (subBreed) =>{
        deleteFilter(subBreed, setFilteredSubBreedsArray, setAllSubBreedsList)
    })
    setAllSubBreedsList([])
    let subBreeds = []
    filteredBreedsArray.forEach( breed => {
      if(allData.message[breed].length > 0){
        subBreeds = subBreeds.concat(allData.message[breed])
      }
    });
    if( subBreeds.length > 0){
      setAllSubBreedsList([...new Set(subBreeds)])
    }

  }, [filteredBreedsArray])

  // FUNCIONES PARA ELIMINAR O AGREGAR FILTROS TRASPASANDO DATA DEL ARRAY DE FILTROS AL ARRAY DE LISTA COMPLETA O VICEVERSA
  // SE PODRIA REFACTORIZAR EN UNA SOLA FUNCION DESPUES
  function deleteFilter(value, updateFilterArray, updateDataArray){
    updateFilterArray((oldData) => oldData.filter( data => data !== value))
    updateDataArray((oldData) => [...oldData, value].sort() )
  }
  function addFilter(value, updateFilterArray, updateDataArray){
    updateFilterArray((oldData) => [...oldData, value] )
    updateDataArray((oldData) => oldData.filter( data => data!== value))
  }


  // FUNCION QUE RECIBE LOS BREEDS SELECCIONADOS Y RETORNARA UN OBJETO CON LOS BREED Y LOS SUB BREEDS CORRESPONDIENTES
  const getSelectedSubBreeds = (breeds) => {
    return breeds.reduce( (acc, breed) => {
      acc[breed] = allData.message[breed].filter( subBreed => filteredSubBreedsArray.includes(subBreed))
      return acc
    }, {})
  }

//FUNCION QUE ORDENA LA DATA SELECCIONADA Y HACE LA SOLICITUD A LA API
  function makeRequest(){
    setLoading(true)

    if(filteredSubBreedsArray.length > 0){

      const breedsToRequest = filteredBreedsArray.filter( breed => {
        return filteredSubBreedsArray.some( subBreed =>  allData.message[breed].includes(subBreed))
      })
      setReqBreeds(breedsToRequest)

      const selectedSubBreedsByBreed = getSelectedSubBreeds(breedsToRequest)
      setReqObj(selectedSubBreedsByBreed)

    } 

}

  function returnToFilters(){
    setShowData(false)
  }


  return (
    <Box w='100vw' minH='100vh' display='grid' placeItems='center' bg={colorMode === 'light' ? 'blue.200' : 'blue.900'} >
      <DarkModeButton colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Box w='90%' h='fit-content' my='4rem' bg={colorMode === 'light' ? 'whiteAlpha.800' : 'blackAlpha.500'} rounded='2xl' display='flex' flexDir='column' p='2rem' boxShadow='lg'>

        <Box mx='auto'>
          <Heading>Doggy APP 🐶</Heading>
        </Box>

        <FiltersBox 
          showData={showData} 
          filteredBreedsArray={filteredBreedsArray}
          allBreedsList={allBreedsList}
          addFilter={addFilter}
          setAllBreedsList={setAllBreedsList}
          setFilteredBreedsArray={setFilteredBreedsArray}
          colorMode={colorMode}
          loading={loading}
          deleteFilter={deleteFilter}
          filteredSubBreedsArray={filteredSubBreedsArray}
          allSubBreedsList={allSubBreedsList}
          setAllSubBreedsList={setAllSubBreedsList}
          setFilteredSubBreedsArray={setFilteredSubBreedsArray}
          makeRequest={makeRequest}
        />

        <Loader loading={loading} />

        <DoggysBox 
          colorMode={colorMode}
          reqBreeds={reqBreeds}
          reqObj={reqObj}
          getSelectedSubBreeds={getSelectedSubBreeds}
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
