import { render, screen } from '@testing-library/react'
import TagFilter from '../components/FilterBox/TagFilter'

describe('TagFilter component', () => {
    it('renders the component', () => {
        render(<TagFilter dataArray={['Prueba']}/>)
        expect(screen.getByText('Prueba')).toBeInTheDocument()
    })

    it('does not renders the component', () => {
        render(<TagFilter/>)
        expect(screen.queryByText('Prueba')).toBeNull()
    })

})