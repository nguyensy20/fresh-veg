<template>
    <div class="body-view">
        <h1>History</h1>
        <div class="order-container">
            <div class="order" v-for="order in orders">
                <p>Time: {{ order['updatedAt'] }}</p>
                <p>Address: {{ order['address'] }}</p>
                <p>Receiver: {{ order['receiver'] }}</p>
                <p>Total: {{ order['total'] }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import CartService from '../services/CartService';
import AddressService from '../services/AddressService';
export default {
    data() {
        return {
            orders: []
        }
    },
    props: {

    },
    methods: {

    },
    async mounted() {
        const res = await CartService.getCompleteCart()
        console.log(res)
        res.forEach(async (item) => {
            const address = await AddressService.getAddressById(item.chosenAddress)
            this.orders.push({
                updatedAt: item.updatedAt,
                address: address.address,
                receiver: address.receiver,
                total: item.total
            })
        })
    }
}
</script>

<style scoped>
@import '../assets/style.css';

.order {
    border: solid 1px black;
}
</style>