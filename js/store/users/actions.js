import { SHOW_LOADER, HIDE_LOADER } from '../loader/types'
import * as type from './types'

import axios from 'axios';

const actions = {
    getUsers({ commit }, howMany) {
        commit(type.REQUEST_USERS);
        commit(SHOW_LOADER, {
            message: 'Fetching users...'
        });

        axios.get(`https://randomuser.me/api/?results=${howMany}&nat=us&seed=foobar`)
            .then(response => {
                commit(type.REQUEST_USERS_SUCCESS, {
                    payload: response.data.results
                });

                commit(HIDE_LOADER)
            })
            .catch(error => {
                commit(type.REQUEST_USERS_ERROR, {
                    error
                });

                commit(SHOW_LOADER, {
                    message: 'There was an error fetching the users'
                })
            })
    }
};

export default actions;