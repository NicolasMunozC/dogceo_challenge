import { render, screen } from '@testing-library/react'
import Loader from '../components/Loader'

describe('Loader component', () => {
    it('renders the component', () => {
        render(<Loader loading={true} />)
        expect(screen.getByText('Cargando...')).toBeInTheDocument()
    })
    it('Does not renders the component', () => {
        render(<Loader loading={false} />)
        expect(screen.queryByText('Cargando...')).toBeNull()
    })
})