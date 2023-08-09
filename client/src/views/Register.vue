<template>
    <div>
        <h1>Register</h1>
        <input id="name" type="text" v-model="name"
            placeholder="Name"> 
        <input id="email" type="text" v-model="email"
            placeholder="Email"> 
        <input id="phone" type="text" v-model="phone"
            placeholder="Phone"> 
        <input id="address" type="text" v-model="address"
            placeholder="Address"> 
        <input id="password" type="password" v-model="password"
            placeholder="Password"> 
        <Button name="Register" @click="register"></Button>
    </div>
</template>
<script>
import Button from '../components/Button.vue'
import UserService from '../services/UserService'
export default {
    // : user.name,
    //       email: user.email,
    //       phone: user.phone,
    //       address: user.address,
    //       role: user.role,
    //       id: user
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
        }
    },
    methods: {
        async register() {
            const res = await UserService.register(this.name, this.email, this.phone, this.address, this.password)
            console.log(res)
        }
    },
    components: {
        Button
    },
}
</script>

<style scoped></style>