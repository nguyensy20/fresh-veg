import Api from "@/services/Api"
    // : user.name,
    //       email: user.email,
    //       phone: user.phone,
    //       address: user.address,
    //       role: user.role,
    //       id: user
export default {
    register(userData) {
        return Api.post('users/register', userData).
        then( response => {
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
        then( response => {
            console.log('User registered successfully:', response.data);
            const token = response.data.accessToken;
            localStorage.setItem('jwtToken', token);
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