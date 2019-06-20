import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import { fireEvent } from '@testing-library/react/dist';

describe('Dashboard', () => {

    it('renders text', () => {
        const queries = render(<Dashboard />)
        queries.getByText(/Baseball Dashboard/i)
      });

    it('if strike button is firing', () => {
        const {getByText, queryByText} = render(<Dashboard />)

        const button = getByText(/Strike!/i)

        fireEvent.click(button)
        expect(queryByText(/Strike/i)).toBeTruthy();
    });

    
    it('if ball button is firing', () => {
        const {getByText, queryByText} = render(<Dashboard />)

        const button = getByText(/Ball!/i)

        fireEvent.click(button)
        expect(queryByText(/Ball!/i)).toBeTruthy();
    });
    it('if foul button is firing', () => {
        const {getByText, queryByText} = render(<Dashboard />)

        const button = getByText(/Foul!/i)

        fireEvent.click(button)
        expect(queryByText(/Foul/i)).toBeTruthy();
    });
    it('if hit button is firing', () => {
        const {getByText, queryByText} = render(<Dashboard />)

        const button = getByText(/Hit!/i)

        fireEvent.click(button)
        expect(queryByText(/Hit/i)).toBeTruthy();
    });
});