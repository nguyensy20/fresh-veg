<template>
    <input :type="customType" :id="customId" :placeholder="customPlaceholder"/>
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
        id: String
    }
}
</script>

<style>
input {
    display: block;
}
</style>