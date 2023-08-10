<template>
    <div class="detail">
        <div class="left">
            <!-- <img :src="inputFields.find(field => field.key === 'imgSrc').value" alt=""> -->
        </div>
        <div class="right">
            <table>
                <tr v-for="field in inputFields" :key="field.key">
                    <td><label :for="field.key">{{ field.label }}</label></td>
                    <td><input :type="field.type" :id="field.key" v-model="item[field.key]" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><Button name="Save" type="submit" @click="save"></Button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Input from '../components/Input.vue';
// import TableInput from '../components/TableInput.vue';
import Button from '../components/Button.vue';
import VegetableService from '../services/VegetableService';
import AddressService from '../services/AddressService';
export default {
    components: {
        Input,
        Button,
        // TableInput,
    },
    data() {
        return {
            inputFields: [
                { key: 'receiver', label: 'Receiver', type: 'text' },
                { key: 'phone', label: 'Phone', type: 'text' },
                { key: 'address', label: 'address', type: 'text' },
            ],
            item: {}
        }
    },
    methods: {
        async save() {
            try {
                console.log("add thís item: ",this.item)
                if (this.item._id) {
                    await AddressService.updateAddress(this.item._id, this.item)
                } else {
                    const res = await AddressService.addAddress(this.item);
                    console.log(res)
                }
                this.$router.push('/address'); // Send the data to the server
            } catch (error) {
                console.error('Error adding vegetable:', error);
            }
        },
        async updateVegetable(formData) {
            try {
                // Use this.item.id to identify the specific item for updating
                await AddressService.updateAddress(this.item.id, formData);
                this.$router.push('/list-product'); // Navigate back to the list
            } catch (error) {
                console.error('Error updating vegetable:', error);
            }
        },
        async fetchProductData(itemId) {
            try {
                if (itemId) {
                    console.log(itemId)
                    // Fetch data from the API based on the itemId
                    const response = await AddressService.getAddressById(itemId);
                    this.item = response; // Update product data
                    console.log(this.item)
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        },
    },
    async mounted() {
        if (this.$route.params.itemId) {
            await this.fetchProductData(this.$route.params.itemId);
        }
        // Fetch data for the item based on the route parameter
    },
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
}
</style>