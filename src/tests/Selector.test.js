import { render, screen } from '@testing-library/react'
import Selector from '../components/FilterBox/Selector'

describe('Selector component', () => {
    it('Render component with dataArray', () => {
        render(<Selector dataArray={['Prueba']}/>)
        expect(screen.getByText('Prueba')).toBeInTheDocument()
    })

    it('Does not render component without dataArray', () => {
        render(<Selector/>)
        expect(screen.queryByText('Prueba')).toBeNull()
    })

})