<template>
    <div class="body-view">
        <h1>User Profile</h1>
        <table>
            <tr>
                <td><label for="name">Name: </label></td>
                <td><input id="name" type="text" v-model="user['name']"></td>
            </tr>
            <tr>
                <td><label for="phone">Phone: </label></td>
                <td> <input id="phone" type="text" v-model="user['phone']"></td>
            </tr>
            <tr>
                <td><label for="email">Email: </label></td>
                <td><input id="email" type="text" v-model="user['email']"></td>
            </tr>
        </table>
        <Button name="View all address" @click="viewAddress"></Button>
    </div>
</template>

<script>
import UserService from '../services/UserService'
import Button from '../components/Button.vue'
import AddressService from '../services/AddressService'
export default {
    components: {
        Button
    },
    data() {
        return {
            user: {},
            addresses: [],
        }
    },
    methods: {
        viewAddress() {
            this.$router.push({name: "address"})
        }
    },
    async mounted() {
        const res = await UserService.getUserProfile()
        this.user = res
    }
}
</script>

<style scoped>
@import '../assets/style.css';

.body-view {
    margin: 0 35%;
    height: 300px;
    background-color: rgb(255, 255, 255);
}
</style>