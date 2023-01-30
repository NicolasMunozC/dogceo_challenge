import { render, screen } from '@testing-library/react'
import Selector from '../components/FilterBox/Selector'

describe('Selector component', () => {
    it('renders the component', () => {
        render(
        <Selector 
        dataArray={['Prueba']}
        showData={false}
        placeholder={'placeholder'}
        updateDataFunc={()=>{}}
        updateFilterFunc={()=>{}}
        isDisabled={false}
        isRequired={true}
        bg={'light'}
        />)
        expect(screen.getByText('Prueba')).toBeInTheDocument()
    })
    
    it('does not renders the component', () => {
        render(
        <Selector
        dataArray={['test1', 'test2', 'test']}
        showData={true}
        placeholder={'placeholder'}
        updateDataFunc={()=>{}}
        updateFilterFunc={()=>{}}
        isDisabled={false}
        isRequired={true}
        bg={'light'}
        />
        )
        expect(screen.queryByText('test2')).toBeNull()
    })

    it('dataArray length = 1', () => {
        render(
        <Selector
        showData={false}
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
        showData={false}
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