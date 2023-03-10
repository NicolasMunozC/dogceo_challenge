import { 
    Avatar,
    Box, 
    Heading,
    Image,
    Skeleton,
    SkeletonText,
} from '@chakra-ui/react'
import React from 'react'
import { fetchBreedRandomImage, fetchSubBreedRandomImage } from '../../services'
import { FaDog } from "react-icons/fa";

function DoggyBox({colorMode, reqObj, breed, showData}) {

    const [breedImage, setBreedImage] = React.useState('')
    const [subBreedsImages, setSubBreedsImages] = React.useState([])
    const [subBreeds, setSubBreeds] = React.useState([])

    React.useEffect( () => {
        fetchBreedRandomImage(breed)
        .then( res => setBreedImage(res) )

        const reqSubBreeds = reqObj[breed]

        if(reqSubBreeds){
            setSubBreeds(reqSubBreeds)
            reqSubBreeds.forEach( (subBreed) => {
                fetchSubBreedRandomImage({breed, subBreed})
                .then( res => {
                    setSubBreedsImages((oldData) => [...oldData, res]) 
                })
            })
        }
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[breed, reqObj])
    

    if(showData){
        return (
            <Box w='100%' h='fit-content' bg={colorMode === 'light' ? 'whiteAlpha.700' : 'blackAlpha.400'} borderRadius='2xl' mt='2rem' py='2rem' px='1rem' boxShadow='lg'>
            <Box display='flex' flexDir='row' justifyContent='space-between'>
                <Heading fontSize={['2xl', '4xl']} textTransform='capitalize' loading='lazy' w='fit-content'>{breed}</Heading>
                    <Avatar icon={<FaDog/>} src={breedImage}  size={['sm', 'md']} />
            </Box>
            <Box>
                { subBreeds.length === 0 &&
                <Skeleton isLoaded={breedImage}>
                    <Image borderRadius='3xl' mt='1rem' mx='auto' src={breedImage} objectFit='cover' boxSize={['250px','400px', '500px']} />
                </Skeleton>
                }
                {
                    subBreeds.map( (subBreed, index) => { return ( 
                        <Box key={subBreed} mt='1rem'w='100%' >
                            <SkeletonText isLoaded={subBreed}>
                                <Heading size='lg' textTransform='capitalize' textAlign='center' textColor={colorMode === 'light'? 'blue.700' : 'blue.500'}>{subBreed}</Heading> 
                            </SkeletonText>
                            <Skeleton isLoaded={subBreedsImages[index]}>
                                <Image borderRadius='3xl' mt='1rem' mx='auto' src={subBreedsImages[index]} objectFit='cover' />
                            </Skeleton>
                        </Box>
                    )})
    
                }
            </Box>
        </Box>
      )
    }

}

export default DoggyBox