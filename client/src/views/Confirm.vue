<template>
    <div class="body-view">
        <h1>Confirm </h1>
        <table class="detail">
            <tr v-for="i in 1">
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
        <div class="footer">
            <Button name="Complete" @click="complete"></Button>
        </div>
    </div>
</template>

<script>
import AddressRadio from '../components/AddressRadio.vue';
import Button from '../components/Button.vue';
import CartService from '../services/CartService';
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
        async complete() {
            const res = await CartService.completePurchase()
            console.log(res)
        }
    }
}
</script>

<style scoped>
@import '../assets/style.css';

table tr {
    height: 50px;
}
.footer {
    display: flex;
    align-items: center;
    justify-content: center;
}
.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Adjust to "contain" or "cover" depending on your preference */
}
</style>