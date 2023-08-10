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
        return Api.get('cart/conplete').then(response => response.data)
    },

    chooseAddress (addressId) {
        const addressData = {
            "addressId":addressId
        }
        return Api.post('/cart/choose-address/', addressData).then(response => response.data)
    },

    completePurchase() {
        return Api.post('/cart/complete-purchase').then(response => response.data)
    }
    // getVegetables() {
    //     return Api.get('vegetables/').then(response => response.data)
    // },
    // getVegetableById(vegetableId) {
    //     return Api.get(`/vegetables/${vegetableId}`)
    //         .then(response => response.data)
    //         .catch(error => {
    //             console.error(`Error fetching vegetable with ID ${vegetableId}:`, error);
    //             throw error;
    //         });
    // },
    // addVegetable(vegetableData) {
    //     return Api.post('/vegetables', vegetableData)
    //         .then(response => response.data)
    //         .catch(error => {
    //             console.error('Error adding vegetable:', error);
    //             throw error;
    //         });
    // },
    // updateVegetable(vegetableId, updatedData) {
    //     return Api.put(`/vegetables/${vegetableId}`, updatedData)
    //         .then(response => response.data)
    //         .catch(error => {
    //             console.error('Error updating vegetable:', error);
    //             throw error;
    //         });
    // },
    // deleteVegetable(vegetableId) {
    //     return Api.delete(`/vegetables/${vegetableId}`)
    //         .then(response => response.data)
    //         .catch(error => {
    //             console.error('Error deleting vegetable:', error);
    //             throw error;
    //         });
    // }
}