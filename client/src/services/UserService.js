import Api from "@/services/Api"
// : user.name,
//       email: user.email,
//       phone: user.phone,
//       address: user.address,
//       role: user.role,
//       id: user
import store from "../store";
import { mapGetters } from 'vuex';
export default {
    register(userData) {
        return Api.post('users/register', userData).
            then(response => {
                console.log('User registered successfully:', response.data);
            })
            .catch(error => {
                console.error('Registration failed:', error);
            });
    },
    loginUser(email, password) {
        const userData = {
            "email": email,
            "password": password
        };
        return Api.post('users/login', userData).
            then(response => {
                console.log('User login successfully:', response.data);
                const token = response.data.accessToken;
                localStorage.setItem('jwtToken', token);
                const tokenParts = response.data.accessToken.split('.');
                if (tokenParts.length === 3) {
                    const tokenPayload = JSON.parse(atob(tokenParts[1]));
                    const role = tokenPayload.user.role; // Adjust the path based on your token structure
                    // Dispatch the login action with roles
                    store.dispatch('login', role);
                }
                return response.data;
            })
            .catch(error => {
                console.error('Registration failed:', error);
            });
    },
    getUserProfile() {
        return Api.get('users/current').
            then(response => {
                console.log('Get user successfully: ', response.data)
                return response.data
            })
            .catch(error => {
                console.error('Registration failed:', error);
                throw error
            });
    },
    udpateProfile(userData) {
        return Api.put(`users/`, userData).then(response => response.data)
    }
}