/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import { App, AppState, Context } from './'

describe('App', () => {
  it('renders the router content', () => {
    render(
      <Context.Provider
        value={{
          state: {
            auth: {
              user: {},
            },
          } as AppState,
          dispatch: jest.fn(),
        }}
      >
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Context.Provider>,
    )
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Update User')).toBeInTheDocument()
  })
})
