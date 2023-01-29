import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
    it('render the expected text', () => {
        render(<App />)
        expect(screen.getByText('Doggy APP 🐶')).toBeInTheDocument()
    })
})