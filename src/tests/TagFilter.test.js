import { render, screen } from '@testing-library/react'
import TagFilter from '../components/FilterBox/TagFilter'

describe('TagFilter component', () => {
    it('Render component with dataArray', () => {
        render(<TagFilter dataArray={['Prueba']}/>)
        expect(screen.getByText('Prueba')).toBeInTheDocument()
    })

    it('Does not render component without dataArray', () => {
        render(<TagFilter/>)
        expect(screen.queryByText('Prueba')).toBeNull()
    })

})