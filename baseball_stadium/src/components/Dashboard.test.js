import React from 'react';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

describe('Dashboard', () => {

    it('renders text', () => {
        const queries = render(<Dashboard />)
        queries.getByText(/Baseball Dashboard/i)
      });

    test('if strike button is firing', () => {
        
    }
});