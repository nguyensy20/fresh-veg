<template>
    <div class="body-view">
        <h1>History</h1>
        <div class="order-container">
            <div class="order" v-for="order in orders">
                <p>Time: {{ order['updatedAt'] }}</p>
                <p>Total: {{ order['total']}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CartService from '../services/CartService';
export default {
    data() {
        return {
            orders:[]
        }
    },
    props: {

    },
    methods: {

    },
    async mounted() {
        const res = await CartService.getCompleteCart()
        console.log(res)
        this.orders = res
    }
}
</script>

<style scoped>
@import '../assets/style.css';
.order{
    border: solid 1px black;
}
</style>