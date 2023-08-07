<template>
    <table>
        <thead>
            <tr>
                <th v-for="column in columns">{{ column }}</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td v-for="(value, key) in item" :key="key">{{ value }}</td>
                <td id="action">
                    <Button name="Edit" @click="gotoEdit"></Button>
                    <Button name="Delete" @click="deleteItem" ></Button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import Button from '../components/Button.vue'
export default {
    data() {
        return {
        }
    },
    methods: {
        gotoEdit() {
            console.log("Edit item");
        },
        deleteItem() {
            console.log("Delete item");
        }
    },
    props: {
        columns: Array,
        data: Array
    },
    components: {
        Button
    }
}
</script>

<style scoped>
#action {
    display: flex;
}
</style>