import { render, screen } from '@testing-library/react'
import Loader from '../components/Loader'

describe('Loader component', () => {
    it('Render component when loading is true', () => {
        render(<Loader loading={true} />)
        expect(screen.getByText('Cargando...')).toBeInTheDocument()
    })
    it('Does not render component when loading is false', () => {
        render(<Loader loading={false} />)
        expect(screen.queryByText('Cargando...')).toBeNull()
    })
})