import Api from "@/services/Api"

export default {
    addToCart(vegetableId, quantity) {
        const itemData = {
            "vegetableId": vegetableId,
            "quantity": quantity
        };
        return Api.post('/cart/add/', itemData).then(response => response.data)
    },

    getActiveCart() {
        return Api.get('cart/active').then(response => response.data)
    },

    getCompleteCart() {
        return Api.get('cart/complete').then(response => response.data)
    },

    chooseAddress(addressId) {
        const addressData = {
            "addressId": addressId
        }
        return Api.post('/cart/choose-address/', addressData).then(response => response.data)
    },

    completePurchase() {
        return Api.post('/cart/complete-purchase').then(response => response.data)
    },

    deleteItem(vegetable) {
        const itemData = {
            "vegetable": vegetable
        }
        return Api.post('/cart/remove', itemData)
    }
}