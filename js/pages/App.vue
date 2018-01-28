<template>
    <div>
        <p>
            <router-link :to="{path: '/' + locale.lang + '/'}">/Home</router-link>
            <router-link :to="{path: '/' + locale.lang + '/users'}">/Users</router-link>
            <router-link :to="{path: '/' + locale.lang + '/edituser'}">/EditUser</router-link>
        </p>
        <p>
            <router-link to="/en/">/En</router-link>
            <router-link to="/kr/">/Kr</router-link>
        </p>
        <router-view/>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        computed: mapState([
            'locale'
        ]),
        methods: {
            ...mapActions([
                'getUser'
            ])
        },
        created(){
            this.getUser();
        }
    }
</script>

<style lang="scss">
    h2 {
        color: #56b983;
    }
</style>
