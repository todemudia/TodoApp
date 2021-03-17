import { 
    GET_FAVOURITES, 
    ADD_FAVOURITES, 
    DELETE_FAVOURITES } 
from './types.js';

export const getFavourites = () => {
    return {
        type: GET_FAVOURITES
    };
};