import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Users from './pages/Users';
import EditUser from './pages/EditUser';
import UserDetail from './pages/UserDetail'
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/en/' // default language
        },
        {
            path: '/:lang/',
            component: Home
        },
        {
            path: '/:lang/users',
            component: Users,
            name: 'users',
            children: [
                {
                    path: ':id',
                    component: UserDetail,
                    props: true,
                    name: 'userdetail'
                }
            ]
        },
        {
            path: '/:lang/edituser',
            component: EditUser
        }
    ]
});

router.afterEach((to, from) => {
    let lang = to.path.split('/')[1];
    const fromLang = from.path.split('/')[1];
    if (!lang) {
        lang = 'en';
    }
    if (lang !== fromLang) {
        store.commit('CHANGE_LANG', {lang});
    }
});

export default router