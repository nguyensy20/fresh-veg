<template>
    <div>
        <h1>List Vegetable</h1>
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">{{ column != '_id' ? column : '' }}</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vegetable, index) in rows" :key="index">
                    <td v-for="column in columns" :key="column">{{ column != '_id' ? vegetable[column] : '' }}</td>
                    <td><Button name="Edit" @click="gotoEdit(vegetable['_id'])"></Button></td>
                    <td><Button name="Delete" @click="deleteItem(vegetable['_id'])"></Button></td>
                </tr>
            </tbody>
        </table>
        <td><Button name="Add vegetable" @click="addVegetable()"></Button></td>
    </div>
</template>

<script>
import VegetableService from '../services/VegetableService';
import Button from '../components/Button.vue';
// import TableCustom from '../components/TableCustom.vue';
export default {
    components: {
        Button,
        // TableCustom,
    },
    data() {
        return {
            vegetables: [],
            columns: ['_id', 'name', 'price', 'quantity', 'unit']
        }
    },
    computed: {
        rows() {
            return this.vegetables.map(vegetable => {
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
            this.$router.push({name: "vegetableDetail"});
        },
        gotoEdit(itemId) {
            console.log(itemId)
            this.$router.push({name: 'vegetableDetail', params: {itemId: itemId}});
        },
        async deleteItem(id) {
            await VegetableService.deleteVegetable(id)
        },
    },
    async mounted() {
        const data = await VegetableService.getVegetables();
        this.vegetables = data
    }
}
</script>

<style scoped>
table th {
    text-align: start;
}
table td {
    text-align: start;
}
</style>