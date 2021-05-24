import { ADD_FAVORİTES,REMOVE_FAVORİTES } from "../actionTypes/actionTypes"

export const addToFavorites=(val)=>{
    return {
        type:ADD_FAVORİTES,
        payload:val
    }

};

export const removeFromFavorites=(val)=>{
    return {
        type:REMOVE_FAVORİTES,
        payload:val,
        
    }

};


