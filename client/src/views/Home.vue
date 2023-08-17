<template>
    <div class="product-list">
        <ProductTag v-for="veg in vegetables" :src="veg['imgSrc']" :id="veg['_id']" :name="veg['name']" class="tag"
            :price="veg['price']"></ProductTag>
    </div>
</template>

<script>
import ProductTag from '../components/ProductTag.vue';
import VegetableService from '../services/VegetableService'; // Adjust the import path
export default {
    components: {
        ProductTag,
    },
    data() {
        return {
            vegetables: []
        }
    },
    methods: {
        goToLogin() {
            console.log("not ok");
        },
    },
    async mounted() {
        const data = await VegetableService.getVegetables();
        this.vegetables = data
    }
}
</script>
<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 10px 20%;
    position: absolute;
    background-color: white;
    box-shadow: 0 0 10px 2px #3333331a
}

.tag {
    margin-right: 10px;
    margin-top: 10px;
}
</style>