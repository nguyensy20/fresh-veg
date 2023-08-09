import Api from "@/services/Api"

export default {
    register(name, email, password) {
        const userData = {
            "username": name,
            "email": email,
            "password": password
        };
        return Api().post('users/register', userData).
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
        return Api().post('users/login', userData).
        then( response => {
            console.log('User registered successfully:', response.data);
        })
        .catch(error => {
            console.error('Registration failed:', error);
        });
    }
}