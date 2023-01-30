import { render, screen } from '@testing-library/react'
import Selector from '../components/FilterBox/Selector'

describe('Selector component', () => {
    it('renders the component', () => {
        render(<Selector dataArray={['Prueba']}/>)
        expect(screen.getByText('Prueba')).toBeInTheDocument()
    })

    it('does not renders the component', () => {
        render(<Selector/>)
        expect(screen.queryByText('Prueba')).toBeNull()
    })

})