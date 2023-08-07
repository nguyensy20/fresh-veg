<template>
    <button >{{ customName }}</button> 
</template>

<script>
export default {
    data() {
        return {
            customName: this.name
        }
    },
    props: {
        name: String,
    },
}
</script>

<style scoped>
</style>