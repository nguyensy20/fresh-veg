<template>
    <div class="body-view">
        <h1>Choose Address</h1>
        <div class="address">
            <AddressRadio id="1"></AddressRadio>
            <AddressRadio id="2"></AddressRadio>
        </div>
        <div class="navigator">
            <router-link to="/cart">
                <Button name="Quay lai"></Button>
            </router-link>
            <router-link to="/confirm">
                <Button name="Xac nhan"></Button>
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue';
import AddressRadio from '../components/AddressRadio.vue';
export default {
    components: {
        AddressRadio,
        Button
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
@import '../assets/style.css';
.choose-address {
    display: block;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 10px 20%;
}

.navigator {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>