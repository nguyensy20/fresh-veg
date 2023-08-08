<template>
    <div>
        <h1>List Vegetable</h1>
        <TableCustom :data="listVegData" :columns="columns"></TableCustom>
        <Button name="Get Vegetables" @click="getVegetables"></Button>
    </div>
</template>

<script>
import TableCustom from '../components/TableCustom.vue';
import VegetableService from '../services/VegetableService';
import Button from '../components/Button.vue';
export default {
    components: {
        TableCustom,
        Button,
    },
    data() {
        return {
            listVegData: [
                { Name: 'Alice', Age: 25, City: 'New York' },
                { Name: 'Bob', Age: 30, City: 'Los Angeles' },
                { Name: 'Charlie', Age: 22, City: 'Chicago' }
            ],
            columns: ['Name', 'Age', 'City']
        }
    },
    methods: {
        async getVegetables() {
            console.log("get vegetables")
            const vegetables = await VegetableService.getVegetables();
            console.log(vegetables);
        }
    }
}
</script>

<style scoped></style>