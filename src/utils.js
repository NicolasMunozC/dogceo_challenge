export const selectedUpdate = (value, whereAdd, whereDelete) => {
    whereAdd( oldData => [...oldData, value].sort())
    whereDelete( oldData => oldData.filter( data => data !== value).sort())
  }

  export const createSelectedObject = ({breeds, allData, selectedSubBreeds}) => {
    return breeds.reduce( (acc, breed) => {
      acc[breed] = allData.message[breed].filter( subBreed => selectedSubBreeds.includes(subBreed))
      return acc
    }, {})
  }

  export const filterBreedsBySubBreeds = ({selectedBreeds, selectedSubBreeds, allData}) => {
    return selectedBreeds.filter( breed => {
      return selectedSubBreeds.some( subBreed => allData.message[breed].includes(subBreed))
      })
  }
  