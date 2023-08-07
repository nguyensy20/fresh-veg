<template>
    <div class="body">
        <label :for="id">{{ label }}</label>
        <input :type="customType" :id="customId"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customId: this.id,
            customType: this.type,
        }
    },
    props: {
        label: String,
        type: String,
        id: String
    }
}
</script>

<style>
.body {
    display: flex;
    align-items: center;
    justify-content: center;
}
input {
    width: 200px;
    height: 30px;
}
</style>