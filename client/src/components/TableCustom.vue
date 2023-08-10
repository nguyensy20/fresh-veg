<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns" :key="column">{{ column }}</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in dataTable" >
                <td  v-for="(value, key) in item" >{{(value)}}</td>
                <td id="action">
                    <Button name="Edit" @click="gotoEdit(item)"></Button>
                    <Button name="Delete" @click="deleteItem()" ></Button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Button from '../components/Button.vue'
import VegetableService from '../services/VegetableService';
export default {
    methods: {
        gotoEdit(item) {
            this.$router.push({ name: 'ProductDetail', params: { item: time } });

        },
        async deleteItem(id) {
            await VegetableService.deleteVegetable(id) 
        },
        isIdField(field) {
            console.log(field)
            return field=='_id'
        }
    },
    props: {
        columns: Array,
        data: Array
    },
    components: {
        Button
    }, 
}
</script>

<style scoped>
#action {
    display: flex;
}
th {
    text-align: start;
}
</style>