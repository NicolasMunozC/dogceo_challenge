import { render, screen } from '@testing-library/react'
import DoggyCard from '../components/DoggysBox/DoggyCard'

describe('DoggyCard component', () => {
    it('renders the component', () => {
        render(
        <DoggyCard 
        colorMode='light'
        breed='Breed'
        reqObj={{}} 
        setShowData={()=>{}}
        setLoading={()=>{}}
        />)
        expect(screen.getByText('Breed')).toBeInTheDocument()
    })

    it('does not renders the component', () => {
        render(
            <DoggyCard 
            colorMode='light'
            reqObj={{}} 
            setShowData={()=>{}}
            setLoading={()=>{}}
            />)
        expect(screen.queryByText('Breed')).toBeNull()
    })

})