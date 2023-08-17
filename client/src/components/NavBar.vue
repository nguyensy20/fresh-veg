<template>
    <nav class="nav-bar">
        <router-link v-if="!isShow('/login')" :style="stylelink" class="custom link" to="/login">Login</router-link>
        <router-link v-if="isShow('/logout')" :style="stylelink" class="custom link" @click="logout()" to="/logout">Log
            out</router-link>
        <router-link v-if="!isShow('/register')" :style="stylelink" class="custom link"
            to="/register">Register</router-link>
        <router-link v-if="shouldShowLink(['customer', 'admin'])" :style="stylelink" to="/">Home</router-link>
        <router-link v-if="shouldShowLink(['customer', 'admin'])" :style="stylelink" to="/userProfile">User
            Profile</router-link>
        <router-link v-if="shouldShowLink(['admin'])" :style="stylelink" to="/vegetables">List Vegetables</router-link>
        <router-link v-if="shouldShowLink(['customer'])" :style="stylelink" to="/cart">Cart</router-link>
        <router-link v-if="shouldShowLink(['customer'])" :style="stylelink" to="/history">History</router-link>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            ListNotShow: ['/login', '/register'],
            stylelink: "color: white; text-decoration: none; margin: 10px"
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        },
        userRoles() {
            return this.$store.getters.userRole;
        }
    },
    methods: {
        isShow(path) {
            if (this.isLoggedIn) {
                return true;
                // } else {
                //     return !this.ListNotShow.includes(path);
            }
        },
        shouldShowLink(requireRoles) {
            if (!this.isLoggedIn) {
                return false;
            }
            const userRole = this.userRoles
            const check = requireRoles.includes(userRole);
            return check
        },
        logout() {
            // UserService.logout();
            localStorage.removeItem('jwtToken');
            this.$store.dispatch('logout');
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