<template>
    <div class="body-view">
        <div class="header">
            <h1>Login Page</h1>
        </div>
        <div class="input">
            <input id="email" type="text" v-model="email" placeholder="Email ">
        </div>
        <div class="input">
            <input id="password" type="password" v-model="password" placeholder="Password">
        </div>
        <div class="button">
            <Button name="Send" @click="login"></Button>
        </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue'
import UserService from '../services/UserService'
export default {
    components: {
        Button
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            const res = await UserService.loginUser(this.email, this.password)
            if (res) {
                // alert("Login successful");
                this.$router.push('/')
            } else {
                alert("Login failed")
            }
        }
    }
}
</script>
<style>
@import '../assets/style.css';

.body-view {
    margin: 1% 35%;
    height: 300px;
    background-color: rgb(19, 99, 19);
}

.header {
    display: flex;
    align-items: center;
    justify-content: center;
}

.input {
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
