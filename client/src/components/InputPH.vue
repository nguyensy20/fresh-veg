<template>
    <input :value="value" :type="customType" :id="customId" :placeholder="customPlaceholder"
        @input="updateValue($event.target.value)" />
</template>

<script>
export default {
    data() {
        return {
            customId: this.id,
            customType: this.type,
            customPlaceholder: this.placeholder
        }
    },
    props: {
        placeholder: String,
        type: String,
        id: String,
        value: String
    },
    methods: {
        updateValue(newValue) {
            this.$emit('update:value', newValue);
        }
    }
}
</script>

<style>
input {
    display: block;
}
</style>