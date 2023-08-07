<template>
    <div>
        <h1>List Vegetable</h1>
        <TableCustom :data="listVegData" :columns="columns"></TableCustom>
    </div>
</template>

<script>
import TableCustom from '../components/TableCustom.vue';
export default {
    components: {
        TableCustom,
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
    props: {

    },
    methods: {

    }
}
</script>

<style scoped></style>