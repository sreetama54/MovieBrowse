import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock data 
const jsonData = {
  page: {
    title: 'Romantic Comedy',
    'content-items': {
      content: [
        {
          name: 'The Birds',
          'poster-image': 'poster1.jpg',
        },
      ],
    },
  },
};

//JSON_ARR-Mocking
const JSON_ARR = [jsonData];

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  test('displays the correct title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Romantic Comedy/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('updates search term correctly', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search');
    userEvent.type(searchInput, 'comedy');
    expect(searchInput).toHaveValue('comedy');
  });
});
