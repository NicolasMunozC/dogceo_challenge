import { 
    Avatar,
    Box, 
    Heading,
    Text,
} from '@chakra-ui/react'
import React from 'react'

function DoggyBox({colorMode, breed, breedRandomImage, subBreeds, showData}) {
    const [randomSubBreedsImages, setRandomSubBreedsImages] = React.useState([])

    function getSubBreadImage(subBread){

    }
    
    React.useEffect(()=>{
        if(showData){
            console.log('Cargar la info');
            if(subBreeds.length > 0){
                subBreeds.forEach( (subBreed) => {
                    fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)
                    .then( res => res.json() )
                    .then( res => {
                        if(res.message){
                            setRandomSubBreedsImages(oldData => [...oldData, res.message])
                        } else{
                            setRandomSubBreedsImages(oldData => [...oldData, ''])
                        }
                    } )
                    .catch( err => console.log(err) )
                })
            }

        }
    },[showData])


    React.useEffect(()=>{
        console.log(breed, randomSubBreedsImages);
    },[randomSubBreedsImages])

  return (
    <Box w='100%' h='fit-content' bg={colorMode === 'light' ? '' : 'blackAlpha.400'} borderRadius='lg' py='1rem' px='1rem' boxShadow='lg'>
        <Box display='flex' flexDir='row' justifyContent='space-between'>
            <Heading mr='1rem' fontSize='2xl' textTransform='capitalize'>{breed}</Heading>
            <Avatar src={breedRandomImage} size='sm'/>
        </Box>
        { 
            subBreeds.map( (subBreed, index) => {
                return(
                <Box key={index} display='flex' flexDir='column'>
                    <Text>{subBreed}</Text>
                    <Avatar src={randomSubBreedsImages[index]} />
                </Box>
                )
            })
        }
            {/* {
                subBreeds.map(subBreed => {
                    return <Text>{subBreed}</Text>
                })
            } */}
            {/* { randomSubBreedsImages.length > 0 &&
                randomSubBreedsImages.map(subBreedImage => {
                    return <Text>subBreedImage</Text>
                })
            } */}
    </Box>
  )
}

export default DoggyBox