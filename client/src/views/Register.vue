<template>
    <div>
        <h1>Register</h1>
        <InputPH id="name" type="text" placeholder="Name"></InputPH>
        <InputPH id="password" type="password" placeholder="Password"></InputPH>
        <Button name="Register" :method="method"></Button>
    </div>
</template>
<script>
import InputPH from '../components/InputPH.vue'
import Button from '../components/Button.vue'
export default {
    data() {
        return {
            method() {
                console.log("Login");
            }
        }
    },
    components: {
        InputPH,
        Button
    },
}
</script>

<style scoped>
</style>