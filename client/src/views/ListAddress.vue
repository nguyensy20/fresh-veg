<template>
    <div class="body-view">
        <div>
            <h1>List Address</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">{{ column != '_id' ? column : '' }}</th>
                    <th><area shape="" coords="" href="" alt="">ction</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(address, index) in rows" :key="index">
                    <td v-for="column in columns" :key="column">{{ column != '_id' ? address[column] : '' }}</td>
                    <td><Button name="Edit" @click="gotoEdit(address['_id'])"></Button></td>
                    <td><Button name="Delete" @click="deleteItem(address['_id'])"></Button></td>
                </tr>
            </tbody>
        </table>
        <div>
            <td><Button name="Add address" @click="addVegetable()"></Button></td>
        </div>
    </div>
</template>

<script>
import VegetableService from '../services/VegetableService';
import Button from '../components/Button.vue';
import AddressService from '../services/AddressService';
// import TableCustom from '../components/TableCustom.vue';
export default {
    components: {
        Button,
        // TableCustom,
    },
    data() {
        return {
            addresses: [],
            columns: ['_id', 'receiver', 'phone', 'address']
        }
    },
    computed: {
        rows() {
            return this.addresses.map(vegetable => {
                const row = {};
                for (const column of this.columns) {
                    row[column] = vegetable[column];
                }
                return row;
            });
        },
    },
    methods: {
        async addVegetable() {
            this.$router.push({name: "addressDetail"});
        },
        gotoEdit(itemId) {
            console.log(itemId)
            this.$router.push({name: 'addressDetail', params: {itemId: itemId}});
        },
        async deleteItem(id) {
            await AddressService.deleteAddress(id)
        },
    },
    async mounted() {
        const data = await AddressService.getAddress();
        console.log(data)
        this.addresses = data
    }
}
</script>

<style scoped>
@import '../assets/style.css';
table th {
    text-align: start;
}
table td {
    text-align: start;
}
</style>