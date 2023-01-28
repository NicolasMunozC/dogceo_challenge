import { 
    Avatar,
    Box, 
    Heading,
    Image,
} from '@chakra-ui/react'
import React from 'react'

function DoggyBox({colorMode, reqObj, breed, setShowData, setLoading}) {

    const [breedImage, setBreedImage] = React.useState('')
    const [subBreedsImages, setSubBreedsImages] = React.useState([])
    const [subBreeds, setSubBreeds] = React.useState([])

    React.useEffect( () => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then( (res) => res.json())
        .then( (res) => {setBreedImage(res.message)})
        
        const reqSubBreeds = reqObj[breed]
        setSubBreeds(reqSubBreeds)
        reqSubBreeds.forEach( (subBreed) => {
            fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)
            .then( (res) => res.json() )
            .then( (res) => {
                setSubBreedsImages((oldData) => [...oldData, res.message])
                setShowData(true)
                setLoading(false)
            })
        })

    },[breed, reqObj])
    
    return (
        <Box w='100%' h='fit-content' bg={colorMode === 'light' ? 'whiteAlpha.700' : 'blackAlpha.400'} borderRadius='2xl' mt='2rem' py='2rem' px='1rem' boxShadow='lg'>
        <Box display='flex' flexDir='row' justifyContent='space-between'>
            <Heading fontSize='4xl' textTransform='capitalize'>{breed}</Heading>
            <Avatar src={breedImage} size='md'/>
        </Box>
        <Box>
            { 
                subBreeds.map( (subBreed, index) => { return ( 
                    <Box key={subBreed} mt='1rem'w='100%' >
                        <Heading size='lg' textTransform='capitalize' textAlign='center' textColor={colorMode === 'light'? 'blue.700' : 'blue.500'}>{subBreed}</Heading> 
                        <Image borderRadius='3xl' mt='1rem' mx='auto' src={subBreedsImages[index]} objectFit='cover' />
                    </Box>
                )})

            }
        </Box>
    </Box>
  )
}

export default DoggyBox