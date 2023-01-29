import { render, screen } from '@testing-library/react'
import DoggysBox from '../components/DoggysBox/DoggysBox'

describe('DoggysBox component', () => {
    it('renders the component', () => {
        render(
        <DoggysBox 
        showData={true}
        colorMode='light'
        returnToFilters={()=>{}}
        reqBreeds={['Breed1', 'Breed2']}
        reqObj={{}} 
        setShowData={()=>{}}
        setLoading={()=>{}}
        />)
        expect(screen.getByText('Volver')).toBeInTheDocument()
    })

    it('does not renders the component', () => {
        render(
            <DoggysBox 
            showData={false}
            colorMode='light'
            returnToFilters={()=>{}}
            reqBreeds={['Breed1', 'Breed2']}
            reqObj={{}} 
            setShowData={()=>{}}
            setLoading={()=>{}}
            />)
        expect(screen.queryByText('Volver')).toBeNull()
    })

})