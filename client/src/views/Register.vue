<template>
    <div class="body-view">
        <div class="form">
            <h1  class="header">Register</h1>
            <div class="input">
                <input id="name" type="text" v-model="user['name']" placeholder="Name">
            </div>
            <div class="input">
                <input id="phone" type="text" v-model="user['phone']" placeholder="Phone">
            </div>
            <div class="input">
                <input id="address" type="text" v-model="user['address']" placeholder="Address">
            </div>
            <div class="input">
                <input id="password" type="password" v-model="user['password']" placeholder="Password">
            </div>
            <div class="input">
                <input id="email" type="text" v-model="user['email']" placeholder="Email">
            </div>
            <div class="button" >
                <Button name="Register" @click="register"></Button>
            </div>
        </div>
    </div>
</template>
<script>
import Button from '../components/Button.vue'
import UserService from '../services/UserService'
export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        async register() {
            const res = await UserService.register(this.user)
            console.log(res)
        }
    },
    components: {
        Button
    },
}
</script>

<style scoped>
@import '../assets/style.css';

.body-view {
    margin: 1% 35%;
    height: 400px;
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