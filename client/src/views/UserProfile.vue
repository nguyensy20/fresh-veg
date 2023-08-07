<template>
    <div class="body-view">
        <h1>User Profile</h1>
        <Input id="name" type="text" label="Name: "></Input>
        <Input id="phone" type="number" label="Phone: "></Input>
        
    </div>
</template>

<script>
import Input from '../components/Input.vue'
export default {
    data() {
        return {

        }
    },
    props: {

    },
    components: {
        Input,
    },
    methods: {

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