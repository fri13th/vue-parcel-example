import * as type from "./types";
import actions from "./actions";

// default lang must be from browser
const state = {
    lang: 'en'
};

const mutations = {
    [type.CHANGE_LANG](state, action) {
        state.lang = action.lang;
    }
};

export default {
    state,
    mutations,
    actions
}