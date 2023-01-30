import { render, screen } from '@testing-library/react'
import FiltersBox from '../components/FilterBox/FiltersBox'

describe('FiltersBox component', () => {
    it('renders the component', () => {
        render(
        <FiltersBox 
        showData={false}
        breedsList={['breed1', 'breed2']}
        selectedBreeds={['selbreed1', 'selbreed2']}
        subBreedsList={['subbreed1', 'subbreed2']}
        setBreedsList={()=>{}}
        setSelectedBreeds={()=>{}}
        colorMode='light'
        isDisabled={false}
        makeRequest={()=>{}}
        loading={false}
        />
        )
        expect(screen.getByText('breed1')).toBeInTheDocument()
    })

    it('does not renders the component', () => {
        render(
        <FiltersBox 
        showData={true}
        breedsList={['breed1', 'breed2']}
        selectedBreeds={['selbreed1', 'selbreed2']}
        subBreedsList={['subbreed1', 'subbreed2']}
        setBreedsList={()=>{}}
        setSelectedBreeds={()=>{}}
        colorMode='light'
        isDisabled={false}
        makeRequest={()=>{}}
        loading={false}
        />
        )
        expect(screen.queryByText('breed1')).toBeNull()
    })

})