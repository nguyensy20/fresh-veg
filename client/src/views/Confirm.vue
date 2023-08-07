<template>
    <div class="body-view">
        <h1>Confirm </h1>
        <table class="detail">
            <tr v-for="i in 4">
                <td class="img-container"><img
                        src="https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/dataimages/202201/original/images1338206_1.jpg"
                        alt=""></td>
                <td>Rau sach</td>
                <td>₫1.045.000</td>
                <td>
                    <input class="number" type="number">
                </td>
                <td>₫3.135.000</td>
                <td>
                    <Button name="Xoa"></Button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import AddressRadio from '../components/AddressRadio.vue';
import Button from '../components/Button.vue';
export default {
    components: {
        AddressRadio,
        Button,
    },
    data() {
        return {
            
        }
    },
    props: {

    },
    methods: {

    }
}
</script>

<style scoped>
@import '../assets/style.css';

img {
    width: 100%;
}
</style>