<template>
    <table>
        <tr v-for="feild in feilds" :key="feild.key">
            <td><label :for="id">{{ feild.label }}</label></td>
            <td><input :type="feild.type" :id="feild.key" /></td>
        </tr>
        <tr>
            <td></td>
            <td><Button name="Save" type="submit" @click="executeMethod"></Button></td>
        </tr>
    </table>
</template>

<script>
import Button from './Button.vue';
export default {
    components: {
        Button,
    },
    data() {
        return {
            customId: this.id,
            customType: this.type,
        }
    },
    props: {
        feilds: Array,
        executeMethod: Function,
    },
    methods: {

    }
}
</script>

<style scoped>
</style>