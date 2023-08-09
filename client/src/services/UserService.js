import Api from "@/services/Api"
    // : user.name,
    //       email: user.email,
    //       phone: user.phone,
    //       address: user.address,
    //       role: user.role,
    //       id: user
export default {
    register(name, email, phone, address, password) {
        const userData = {
            "name": name,
            "email": email,
            "phone": phone, 
            "address": address,
            "password": password,

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