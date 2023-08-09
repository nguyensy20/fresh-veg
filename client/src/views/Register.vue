<template>
    <div>
        <h1>Register</h1>
        <input id="username" type="text" v-model="username"
            placeholder="Username"> 
        <input id="email" type="text" v-model="email"
            placeholder="Email"> 
        <input id="password" type="password" v-model="password"
            placeholder="Password"> 
        <Button name="Register" @click="register"></Button>
    </div>
</template>
<script>
import Button from '../components/Button.vue'
import UserService from '../services/UserService'
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
        }
    },
    methods: {
        printsmth() {
            console.log(this.username, this.email, this.password)
        },
        async register() {
            const res = await UserService.register(this.username, this.email, this.password)
            console.log(res)
        }
    },
    components: {
        Button
    },
}
</script>

<style scoped></style>