import * as type from './types'
import { LOCAL_USER } from '../../constants'

function getLocalUser(){
    return localStorage.getItem(LOCAL_USER);
}

const actions = {
    getUser({ commit }){
        const storedUser = getLocalUser();

        commit(type.GET_USER, {
            user: storedUser
        })
    },

    updateUser({ commit }, user){
        localStorage.setItem(LOCAL_USER, JSON.stringify(user));

        commit(type.UPDATE_USER, {
            user
        })
    }
};

export default actions;