<template>
    <div class="product-list">
        <ProductTag v-for="i in 8" src="https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/dataimages/202201/original/images1338206_1.jpg"
        name="rau sach" class="tag"
        ></ProductTag>
    </div>
</template>

<script> 
import ProductTag from '../components/ProductTag.vue';
export default{
    components: {
        ProductTag,
    },
    data() {
        return {
        }
    },
    methods: {
        goToLogin() {
            console.log("not ok");
        },
    },
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