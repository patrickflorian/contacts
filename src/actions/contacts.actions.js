export const ADD = 'ADD_CONTACT';
export const DELETE = 'DELETE_CONTACT';
export const UPDATE = 'UPDATE_CONTACT';
export const LIST = 'LIST_CONTACT';

export const ajouter = (payload) => dispatch =>

    dispatch({
        type: ADD,
        payload: payload
    });

export const deleteContact = (payload) => dispatch =>
    dispatch({
        type: DELETE,
        key: payload
    });

export const updateContact = (payload) => dispatch =>
    dispatch({
        type: UPDATE,
        user: payload
    });
export const listContacts = (payload) => dispatch =>
    dispatch({
        type: LIST,
        keyword: payload
    });