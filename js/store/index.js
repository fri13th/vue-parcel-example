import Vue from 'vue';
import Vuex from 'vuex';
import loader from './loader';
import users from './users';
import user from './user';
import locale from './locale';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        loader,
        user,
        users,
        locale
    }
});