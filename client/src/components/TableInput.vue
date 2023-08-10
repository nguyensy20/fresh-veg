<template>
    <table>
        <tr v-for="field in fields" :key="field.key">
            <td><label :for="field.key">{{ field.label }}</label></td>
            <td><input :type="field.type" :id="field.key" v-model="formData[field.key]"/></td>
        </tr>
        <tr>
            <td></td>
            <td><Button name="Save" type="submit" @click="save"></Button></td>
        </tr>
    </table>
</template>

<script>
import Button from './Button.vue';
export default {
    components: {
        Button,
    },
    props: {
        fields: Array,
        executeMethod: Function,
        formData: Object
    },
    data() {
        return {
            formData: {},
            fields: this.fields,
        };
    },
    methods: {
        save() {
            this.executeMethod(this.formData);
        },
    },
};
</script>

<style scoped>
</style>