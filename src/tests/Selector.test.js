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

    it('dataArray length = 1', () => {
        render(
        <Selector
        dataArray={['test']}
        placeholder={'placeholder'}
        updateDataFunc={()=>{}}
        updateFilterFunc={()=>{}}
        isDisabled={false}
        isRequired={true}
        bg={'light'}
        />
        )
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    it('dataArray length > 1', () => {
        render(
        <Selector
        dataArray={['test1', 'test2', 'test']}
        placeholder={'placeholder'}
        updateDataFunc={()=>{}}
        updateFilterFunc={()=>{}}
        isDisabled={false}
        isRequired={true}
        bg={'light'}
        />
        )
        expect(screen.getByText('test2')).toBeInTheDocument()
    })

})