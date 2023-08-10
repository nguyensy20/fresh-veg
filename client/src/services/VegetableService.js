import Api from "@/services/Api"

export default {
    getVegetables() {
        return Api.get('vegetables/').then(response => response.data)
    },
    getVegetableById(vegetableId) {
        return Api.get(`/vegetables/${vegetableId}`)
            .then(response => response.data)
            .catch(error => {
                console.error(`Error fetching vegetable with ID ${vegetableId}:`, error);
                throw error;
            });
    },
    addVegetable(vegetableData) {
        return Api.post('/vegetables', vegetableData)
            .then(response => response.data)
            .catch(error => {
                console.error('Error adding vegetable:', error);
                throw error;
            });
    },
    updateVegetable(vegetableId, updatedData) {
        return Api.put(`/vegetables/${vegetableId}`, updatedData)
            .then(response => response.data)
            .catch(error => {
                console.error('Error updating vegetable:', error);
                throw error;
            });
    },
    deleteVegetable(vegetableId) {
        return Api.delete(`/vegetables/${vegetableId}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error deleting vegetable:', error);
                throw error;
            });
    }
}