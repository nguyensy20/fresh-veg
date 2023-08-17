<template>
    <div class="body-view">
        <h1>Choose Address</h1>
        <div class="address" v-for="address in addresses">
            <div class="left">
                <input class="radio" :value="address._id" type="radio" name="address" :id="address.id"
                    v-model="selectedAddressId">
            </div>
            <div class="right">
                <div class="header">
                    <h4>{{ address.receiver }}</h4>
                    <h4>-</h4>
                    <h4>{{ address.phone }}</h4>
                </div>
                <div class="body">
                    <p>{{ address.address }}</p>
                </div>
            </div>
            <!-- <AddressRadio :id="address._id" :receiver="address.receiver" :phone="address.phone" :address="address.address">
            </AddressRadio> -->
        </div>
        <div class="navigator">
            <router-link to="/cart">
                <Button name="Quay lai"></Button>
            </router-link>
            <router-link to="/confirm">
                <Button name="Xac nhan" @click="confirm"></Button>
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue';
import AddressRadio from '../components/AddressRadio.vue';
import CartService from '../services/CartService';
import AddressService from '../services/AddressService';
export default {
    components: {
        AddressRadio,
        Button
    },
    data() {
        return {
            addresses: [],
            selectedAddressId: null,
        }
    },
    methods: {
        async confirm() {
            if (this.selectedAddressId !== null) {
                console.log(this.selectedAddressId)
                const res = await CartService.chooseAddress(this.selectedAddressId)
                console.log(res)
            } else {
                console.warn('No address selected.');
                // Optionally, you can show an alert or notification to the user.
            }
        },
    },
    watch: {
    },
    async mounted() {
        const res = await AddressService.getAddress()
        this.addresses = res
        console.log(res)
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

.address {
    display: flex;
    border: solid black 1px;
    border-radius: 5px;
    margin-top: 10px;

}

.address .left {
    display: flex;
    align-items: center;
}


.navigator {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>