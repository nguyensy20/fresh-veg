import Api from "@/services/Api"

export default {
    getVegetables() {
        return Api().get('vegetables');
    }
}