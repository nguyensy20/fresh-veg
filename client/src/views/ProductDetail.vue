<template>
    <div class="detail">
        <div class="left">
            <img src="https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/dataimages/202201/original/images1338206_1.jpg"
                alt="">
        </div>
        <div class="right">
            <TableInput :feilds="inputFields" :execute-method="save"></TableInput>
        </div>
    </div>
</template>

<script>
import Input from '../components/Input.vue';
import TableInput from '../components/TableInput.vue';
export default {
    components: {
        Input,
        TableInput,
    },
    data() {
        return {
            inputFields: [
                { key: 'username', label: 'Username', type: 'text', value: '' },
                { key: 'phone', label: 'Phone', type: 'text', value: ''},
                { key: 'password', label: 'Password', type: 'password', value: ''},
                // Add more fields as needed
            ],
        }
    },
    props: {

    },
    methods: {
        save() {
            console.log("Save product detail");
        }
    }
}
</script>

<style scoped>
.detail {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding: 10px 20%;
    /* position: absolute; */
    background-color: white;
}

.left {
    width: 50%;
}

.left img {
    width: 100%;
}

.right {
    left: 50%;
    width: 50%;
}</style>