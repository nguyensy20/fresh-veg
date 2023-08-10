import Api from "@/services/Api"

export default {
    getAddress() {
        return Api.get('address/').then(response => response.data)
    }

    // addToCart(vegetableId, quantity) {
    //     const itemData = {
    //         "vegetableId": vegetableId,
    //         "quantity": quantity
    //     };
    //     return Api.post('/cart/add/', itemData).then(response => response.data)
    // },

    // getActiveCart() {
    //     return Api.get('cart/active').then(response => response.data)
    // },
    
    // getCompleteCart() {
    //     return Api.get('cart/conplete').then(response => response.data)
    // }
}