export const Actions = {
    ADD_FEATURE: 'ADD_FEATURE',
    REMOVE_FEATURE: 'REMOVE_FEATURE'
};

export const addFeature = id => ({
    type: Actions.ADD_FEATURE,
    payload: {id}
})

export const removeFeature = function (id) {
    return {
        type: Actions.REMOVE_FEATURE,
        payload: {id}
    }
}
