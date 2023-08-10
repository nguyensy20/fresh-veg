<template>
    <div class="address">
        <div class="left">
            <input class="radio" :value="id" type="radio" name="address" :id="id" v-model="selectedAddressId">
        </div>
        <div class="right">
            <div class="header">
                <h4>{{ receiver }}</h4>
                <h4>{{ phone }}</h4>
            </div>
            <div class="body">
                <p>{{ address }}</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedAddressId: null,
        };
    },
    watch: {
        selectedAddressId(newValue) {
            this.$emit('addressSelected', newValue);
        },
    },
    props: {
        id: String,
        address: String,
        receiver: String,
        phone: String
    },
}
</script>

<style scoped>
.address {
    background-color: white;
    display: flex;
}

.radio {
    width: 20px;
    height: 20px;
}

.left {
    width: 5%;
}

.right {
    width: 90%;
}

.header {
    display: flex;
    height: 2rem;
    align-items: center;
}

.header h4 {
    margin-right: 10px;
    height: 2rem;
}</style>