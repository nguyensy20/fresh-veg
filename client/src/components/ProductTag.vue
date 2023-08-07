<template>
    <div class="product-tag">
        <img :src="imgSrc" :alt="imgAlt">
        <div class="detail">
            <div class="header">
                <h1>{{ productName }}</h1>
            </div>
            <div class="body">
                <InputPH class="number" type="number"></InputPH>
                <Button class="add" name="Add" @click="addToCart"></Button>
            </div>
        </div>
    </div>
</template>

<script>
import InputPH from './InputPH.vue';
import Button from './Button.vue';
export default {
    components: {
        InputPH,
        Button,
    },
    data() {
        return {
            imgSrc: this.src,
            imgAlt: this.name,
            productName: this.name,
        }
    },
    props: {
        src: String,
        name: String,
    },
    methods: {
        addToCart() {
            console.log("Add to card");
        }
    }
}
</script>

<style scoped>
.product-tag {
    max-width: 200px;
    max-height: 250px;
}
.product-tag img{
    width: 100%;
}
.number {
    max-width: 150px;
}
.add {
    width: 50px;
}
.body {
    display: flex;
    /* width: 100%; */
}

</style>