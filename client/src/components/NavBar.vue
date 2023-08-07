<template>
    <nav class="nav-bar" v-if="!isShow()">   
        <router-link :style="stylelink" class="custom link"  to="/login">Login</router-link>
        <router-link :style="stylelink" to="/">Home</router-link>
        <router-link :style="stylelink" to="/userProfile">User Profile</router-link>
        <router-link :style="stylelink" to="/vegetables">List Vegetables</router-link>
        <router-link :style="stylelink" to="/productDetail">Product Detail</router-link>
        <router-link :style="stylelink" to="/cart">Cart</router-link>
        <router-link :style="stylelink" to="/history">History</router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            ListNotShow : ['/login', '/register'],
            stylelink : "color: white; text-decoration: none; margin: 10px"
        }
    },
    props: {

    },
    computed: {
    },
    methods: {
        isShow() {
            return this.ListNotShow.includes(this.$route.path);
        }
    }
}
</script>

<style>
.nav-bar {
    display: flex;
    background-color: rgb(19, 99, 19);
    justify-content: center;
    align-items: center;
    height: 50px;
}
</style>