<template>
    <div class="address">
        <div class="left">
            <input class="radio" type="radio" name="address" :id="id">
        </div>
        <div class="right">
            <div class="header">
                <h4>Nguyễn Tiến Sỹ</h4>
                <h4>012314563</h4>
            </div>
            <div class="body">
                <p>Bất Động Sản Thành Phát Quang, Thạch Thất, Thôn 8
                    Xã Thạch Hòa, Huyện Thạch Thất, Hà Nội</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            id: this.id
        }
    },
    props: {
        id: String
    },
    methods: {

    }
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
}
</style>