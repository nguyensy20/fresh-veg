// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        isLoggedIn: false,
        userRole: ''
    },
    mutations: {
        setLoggedIn(state, status) {
            state.isLoggedIn = status;
        },
        setUserRole(state, role) {
            state.userRole = role;
        }
    },
    actions: {
        login({ commit }, role) {
            // Logic to peform login
            commit('setLoggedIn', true);
            commit('setUserRole', role);
        },
        logout({ commit }, role) {
            // Logic to perform logout
            commit('setLoggedIn', false);
            commit('setUserRole', role);
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        userRole: state => state.userRole
    }
});

export default store;
