<template>
    <div class="body-view">
        <table class="detail">
            <tr v-for="item in  items ">
                <td class="img-container"><img :src="item.src" alt=""></td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}đ</td>
                <td>
                    <!-- <input type="number "> -->
                    <input class="number" type="number" v-model="item.quantity" />
                </td>
                <td>{{ item.price * item.quantity }}đ</td>
                <td>
                    <Button name="Xoa" @click="deleteItem(item.vegetable)"></Button>
                </td>
            </tr>
        </table>
        <div class="total">
            <p>Tong thanh toan: {{ calculateTotalPayment() }}</p>
            <router-link to="/chooseAddress">
                <Button name="Mua hang">
                </Button>
            </router-link>
        </div>
    </div>
</template>

<script>
// import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import CartService from '../services/CartService';
import VegetableService from '../services/VegetableService';
export default {
    components: {
        Button,
    },
    data() {
        return {
            items: [],
        }
    },
    computed: {
        totalPayment() {
            return this.item.quantity * this.item.price;
        },
    },
    methods: {
        calculateTotalPayment() {
            var totals = 0
            this.items.forEach((item) => {
                totals += item.quantity * item.price
            })
            return totals
        },
        async deleteItem(id) {
            console.log(id)
            const res = await CartService.deleteItem(id)
            console.log(res)
        }
    },
    async mounted() {
        const res = await CartService.getActiveCart()
        res.items.forEach(async (item) => {
            const vegetable = await VegetableService.getVegetableById(item.vegetable)
            this.items.push({
                src: vegetable.imgSrc,
                name: vegetable.name,
                price: vegetable.price,
                quantity: item.quantity,
                vegetable: item.vegetable
            })
        })
        // this.items = res.items
        console.log(res)
    }
}
</script>

<style scoped>
@import '../assets/style.css';

.cart {
    display: block;
    align-items: center;
    justify-content: center;
    margin: 10px 20%;
    background-color: white;
    box-shadow: 0 0 10px 2px #3333331a;
}

.detail {
    width: 100%;
}

.total {
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-container {
    overflow: hidden;
    width: 100px;
    height: 100px;
}

.number {
    width: 100px;
}

tr {
    height: 100px;
    margin: 20px;
    padding: 20px;
}

td {
    width: 100px;
    margin: 20px;
}

img {
    width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
}
</style>