<template>
    <div class="product-tag">
        <div class="img-container">
            <img :src="src" :alt="name">
        </div>
        <div class="detail">
            <div class="header">
                <table>
                    <tr>
                        <td class="name">{{ name }}</td>
                        <td class="price">{{ price }}đ</td>
                    </tr>
                </table>
            </div>
            <div class="body">
                <input class="number" type="number" v-model="quantity">
                <Button class="add" name="Add" @click="addToCart(id, this.quantity)"></Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
import CartService from '../services/CartService';
export default {
    components: {
        Button,
    },
    data() {
        return {
            quantity: ''
        }
    },
    props: {
        src: String,
        name: String,
        price: Number,
        id: String, 
    },
    methods: {
        async addToCart(vegetableId, quantity) {
            console.log(vegetableId, quantity)
            const res =await CartService.addToCart(vegetableId, quantity)
            console.log(res)
        }
    }
}
</script>

<style>

.img-container {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: 150px;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Adjust to "contain" or "cover" depending on your preference */
}

.number {
    max-width: 70%;
}

.add {
    width: 30%;
    height: 100%;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.name {
    text-align: left;
}

.price {
    text-align: right;
    color: rgb(219, 117, 0);
}

.body {
    display: flex;
    height: 30px;
}</style>