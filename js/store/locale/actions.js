import * as type from "./types";

const actions = {
    changeLang({ commit }, lang) {
        commit(type.CHANGE_LANG, {lang});
    }
};

export default actions;