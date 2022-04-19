import { initialState, reducer, ActionTypes } from './'

describe('Reducer', () => {
  it('adds a new task', () => {
    const results = reducer(initialState, {
      type: ActionTypes.ADD_TASK,
      task: {
        id: '1234-1234-123456-1234',
        name: 'Lorem ipsum dolor sit amet',
      },
    })

    expect(results.tasks).toMatchObject([
      { id: '1234-1234-123456-1234', name: 'Lorem ipsum dolor sit amet' },
    ])
  })

  it('deletes a task', () => {
    const state = {
      ...initialState,
      tasks: [
        { id: '1234-1234-123456-1234', name: 'Lorem ipsum dolor sit amet' },
      ],
    }

    const results = reducer(state, {
      type: ActionTypes.DELETE_TASK,
      id: '1234-1234-123456-1234',
    })

    expect(results.tasks).not.toMatchObject([
      { id: '1234-1234-123456-1234', name: 'Lorem ipsum dolor sit amet' },
    ])
  })

  it('updates the user profile', () => {
    const state = {
      ...initialState,
      auth: {
        ...initialState.auth,
        user: {
          ...initialState.auth.user,
          firstName: 'John',
          lastName: 'Doe',
          username: 'jdoe123',
          email: 'jdoe@example.com',
        },
      },
    }

    const results = reducer(state, {
      type: ActionTypes.UPDATE_USER,
      user: {
        firstName: 'James',
        lastName: 'Smith',
        username: 'jsmit321',
        email: 'jsmit@example.com',
      },
    })

    expect(results.auth.user).not.toMatchObject({
      firstName: 'John',
      lastName: 'Doe',
      username: 'jdoe123',
      email: 'jdoe@example.com',
    })
  })
})
