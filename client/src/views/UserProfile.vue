<template>
    <div class="body-view">
        <h1>User Profile</h1>
        <table>
            <tr>
                <td><label for="name">Name: </label></td>
                <td><input id="name" type="text" v-model="name"></td>
            </tr>
            <tr>
                <td><label for="phone">Phone: </label></td>
                <td> <input id="phone" type="text" v-model="phone"></td>
            </tr>
            <tr>
                <td><label for="email">Email: </label></td>
                <td><input id="email" type="text" v-model="email"></td>
            </tr>
        </table>
    </div>
</template>

<script>
import UserService from '../services/UserService'
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            address: '',
        }
    },
    props: {

    },
    components: {
    },
    methods: {

    },
    async mounted() {
        const user = await UserService.getUserProfile()
        this.name = user.name,
        this.email = user.email,
        this.phone = user.phone,
        this.address = user.address
    }
}
</script>

<style scoped>
@import '../assets/style.css';
.body-view {
    margin:0 35%;
    height: 300px;
    background-color: rgb(255, 255, 255);
}
</style>