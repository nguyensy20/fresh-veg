import Api from "@/services/Api"

export default {
    getAddress() {
        return Api.get('address/').then(response => response.data)
    },
    
    getAddressById(addressId) {
        return Api.get(`address/${addressId}`).then(response => response.data)
    },

    addAddress(addressData) {
        return Api.post('address/', addressData).then(response => response.data)
    },
    
    updateAddress(addressId, addressData) {
        return Api.put(`address/${addressId}`, addressData).then(response => response.data)
    },
    
    deleteAddress(addressId) {
        return Api.delete(`address/${addressId}`).then(response => response.data)
    }
}