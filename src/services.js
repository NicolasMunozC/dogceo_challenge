export const fetchAllData = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    return res.json()
}

export const fetchBreedRandomImage = async (breed) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    const data = await res.json()
    return data.message
}

export const fetchSubBreedRandomImage = async ({breed, subBreed}) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)
    const data = await res.json()
    return data.message
}