import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import { fireEvent } from '@testing-library/react/dist';

describe('Display', () => {

    it('renders text', () => {
        const queries = render(<App />)
        queries.getByText(/Display will show the count of "balls" and "strikes"/i)
      });

      it('if strike button is incrementing from 0 - 1', () => {
        const {getByText} = render(<App />)

        const button = getByText(/Strike!/i)

        fireEvent.click(button)
        expect(getByText(/Strike Count: 1/i)).toBeTruthy();
    });
    it('if strike button is incrementing from 1 - 2', () => {
        const {getByText} = render(<App />)

        const button = getByText(/Strike!/i)

        fireEvent.click(button)
        fireEvent.click(button)
        expect(getByText(/Strike Count: 2/i)).toBeTruthy();
    });

    it('if ball button is incrementing from 0 - 1', () => {
        const {getByText} = render(<App />)

        const button = getByText(/Ball!/i)

        fireEvent.click(button)
        expect(getByText(/Ball Count: 1/i)).toBeTruthy();
    });
    it('if ball button is incrementing from 1 - 2', () => {
        const {getByText} = render(<App />)

        const button = getByText(/Ball!/i)

        fireEvent.click(button)
        fireEvent.click(button)
        expect(getByText(/Ball Count: 2/i)).toBeTruthy();
    });
    it('if foul button is incrementing strike from 0 - 1', () => {
        const {getByText} = render(<App />)

        const button = getByText(/Foul!/i)

        fireEvent.click(button)
        expect(getByText(/Strike Count: 1/i)).toBeTruthy();
    });
    it('if foul button is incrementing strike from 1 - 2', () => {
        const {getByText} = render(<App />)

        const button = getByText(/Foul!/i)

        fireEvent.click(button)
        fireEvent.click(button)
        expect(getByText(/Strike Count: 2/i)).toBeTruthy();
    });
    it('if hit button is reseting ball and strike to 0', () => {
        const {getByText} = render(<App />)

        const button = getByText(/Hit!/i)

        fireEvent.click(button)
        expect(getByText(/Strike Count: 0/i)).toBeTruthy();
        expect(getByText(/Ball Count: 0/i)).toBeTruthy();
    });
});