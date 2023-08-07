<template>
    <div class="body-view">
        <div class="header">
            <h1>Login Page</h1>
        </div>
        <div class="input">
            <InputPH id="name" type="text" placeholder="Name"></InputPH>
        </div>
        <div class="input">
            <InputPH id="password" type="password" placeholder="Password"></InputPH>
        </div>
        <div class="button">
            <Button name="Send" :method="method"></Button>
        </div>
    </div>
</template>
<script>
import InputPH from '../components/InputPH.vue'
import Button from '../components/Button.vue'
export default {
    components: {
        InputPH,
        Button
    },
    data() {
        return {
            method() {
                console.log("Login");
            }
        }
    },
    methods: {

    }
}
</script>
<style>
@import '../assets/style.css';

.body-view {
    margin:5% 35%;
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
}</style>
