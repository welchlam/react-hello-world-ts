export const Actions = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER'
}

export const addUser = user => ({
    type: Actions.ADD_USER,
    payload: {user}
})

export const removeUser = user => ({
    type: Actions.REMOVE_USER,
    payload: {user}
})
